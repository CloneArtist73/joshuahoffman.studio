param(
    [string]$SourceDir = "dist",
    [string]$FtpHost = $env:INMOTION_FTP_HOST,
    [string]$FtpUser = $env:INMOTION_FTP_USERNAME,
    [string]$FtpPassword = $env:INMOTION_FTP_PASSWORD,
    [string]$RemoteRoot = $env:INMOTION_FTP_REMOTE_DIR,
    [int]$FtpPort = 21,
    [bool]$UseSsl = $false,
    [bool]$BuildFirst = $false,
    [bool]$DryRun = $false,
    [string[]]$Exclude = @(".DS_Store")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-SecureStringText {
    param([System.Security.SecureString]$Value)
    $ptr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($Value)
    try {
        return [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
    }
    finally {
        [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
    }
}

function Invoke-Upload {
    param(
        [Parameter(Mandatory = $true)][System.IO.FileInfo]$File,
        [string]$RemotePathBase
    )

    $relative = $File.FullName.Substring($SourceRoot.Length).TrimStart("\", "/")
    $remoteParent = [System.IO.Path]::GetDirectoryName($relative).Replace("\", "/")
    $remoteDir = if ([string]::IsNullOrWhiteSpace($remoteParent)) {
        $RemotePathBase.TrimEnd("/")
    }
    else {
        "$($RemotePathBase.TrimEnd('/'))/$remoteParent"
    }
    $remoteFilePath = "$remoteDir/$($File.Name)"
    $remoteFilePath = $remoteFilePath.Replace("//", "/")

    if ($DryRun) {
        Write-Host "DRY RUN: $($File.FullName) -> ftp://$FtpHost:$FtpPort$remoteFilePath"
        return
    }

    $args = @(
        "--ftp-pasv",
        "--ftp-create-dirs",
        "--user", "$FtpUser`:$FtpPassword",
        "--upload-file", $File.FullName,
        "ftp://$FtpHost`:$FtpPort$remoteFilePath"
    )

    if ($UseSsl) {
        $args = @("--ssl-reqd") + $args
    }

    $result = & $CurlPath @args 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed for $($File.FullName): $result"
    }
}

if ([string]::IsNullOrWhiteSpace($FtpHost)) { throw "Missing host. Set -FtpHost or INMOTION_FTP_HOST." }
if ([string]::IsNullOrWhiteSpace($FtpUser)) { throw "Missing username. Set -FtpUser or INMOTION_FTP_USERNAME." }
if ([string]::IsNullOrWhiteSpace($FtpPassword)) {
    $secure = Read-Host "FTP password" -AsSecureString
    $FtpPassword = Get-SecureStringText -Value $secure
}

if ([string]::IsNullOrWhiteSpace($RemoteRoot)) {
    $RemoteRoot = "/"
}
if (-not $PSBoundParameters.ContainsKey("FtpPort")) {
    if ($env:INMOTION_FTP_PORT -match "^\d+$") {
        $FtpPort = [int]$env:INMOTION_FTP_PORT
    }
}

$CurlPath = (Get-Command curl.exe -ErrorAction SilentlyContinue).Source
if (-not $CurlPath) { throw "curl.exe is required but was not found in PATH." }

$SourceRoot = (Resolve-Path -Path $SourceDir).Path
$SourceRoot = $SourceRoot.TrimEnd('\')
if (-not (Test-Path $SourceRoot)) { throw "Source directory not found: $SourceDir" }

if ($BuildFirst) {
    Write-Host "Running npm run build..."
    $build = Start-Process -FilePath npm -ArgumentList "run", "build" -NoNewWindow -PassThru -Wait
    if ($build.ExitCode -ne 0) { throw "npm run build failed." }
}

$RemoteRoot = "/" + ($RemoteRoot -replace "^[\\/]+|[\\/]+$", "")
$remotePathBase = if ($RemoteRoot -eq "/") { "/" } else { $RemoteRoot }

Write-Host "Uploading '$SourceRoot' to 'ftp://$FtpHost$remotePathBase'..."
$files = Get-ChildItem -Path $SourceRoot -Recurse -File | Where-Object {
    $name = $_.Name
    $parts = $_.FullName -split [regex]::Escape([IO.Path]::DirectorySeparatorChar)
    -not ($parts | Where-Object { $_ -in $Exclude })
}

$total = 0
$errors = @()

foreach ($f in $files) {
    try {
        Invoke-Upload -File $f -RemotePathBase $remotePathBase
        $total++
    }
    catch {
        $errors += $_.Exception.Message
    }
}

Write-Host "Uploaded files: $total"
if ($errors.Count -gt 0) {
    Write-Warning "Upload finished with $($errors.Count) error(s):"
    $errors | ForEach-Object { Write-Warning $_ }
    exit 1
}

Write-Host "Done."
