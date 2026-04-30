# InMotion FTP Upload Script

This plugin deploys your built site output to an InMotion-hosted server using FTP.

## Required credentials

- Set environment variables (recommended):
  - `INMOTION_FTP_HOST`
  - `INMOTION_FTP_USERNAME`
  - `INMOTION_FTP_PASSWORD`
- Optional:
  - `INMOTION_FTP_REMOTE_DIR` (defaults to `/`)

You can load these from `scripts/.env.example` manually or your shell profile.

## Run from repository root

```powershell
# from repo root
pwsh plugins\inmotion-ftp-upload\scripts\upload-to-inmotion.ps1 `
  -SourceDir dist `
  -RemoteRoot / `
  -BuildFirst:$true
```

Useful options:

- `-FtpHost`: override host.
- `-FtpUser`: override username.
- `-FtpPassword`: override password (omit to be prompted).
- `-RemoteRoot`: target remote directory under your account.
- `-UseSsl`: enable FTPS (`--ssl-reqd` in curl).
- `-BuildFirst`: run `npm run build` before upload.
- `-DryRun`: list changes without uploading.
- `-Exclude`: add filenames to skip.

## Note

The script uses `curl.exe` so it requires that command to be available in `PATH`.
