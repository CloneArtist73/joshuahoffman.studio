<?php

$recipient = 'info@joshuahoffman.studio';
$siteEmail = 'info@joshuahoffman.studio';
$successPath = '/contact/thank-you/';
$errorPath = '/contact/?error=send';

function redirect_to($path) {
    header('Location: ' . $path, true, 303);
    exit;
}

function posted_field($name, $maxLength = 500) {
    $value = isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[ \t]+/', ' ', $value);

    if (strlen($value) > $maxLength) {
        $value = substr($value, 0, $maxLength);
    }

    return $value;
}

function header_field($name, $maxLength = 200) {
    $value = posted_field($name, $maxLength);
    return str_replace(["\n", "\r"], ' ', $value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_to('/contact/');
}

$honeypot = isset($_POST['website']) ? trim((string) $_POST['website']) : '';

if ($honeypot !== '') {
    redirect_to($successPath);
}

$name = header_field('name', 120);
$email = header_field('email', 254);
$inquiryType = header_field('inquiryType', 120);
$message = posted_field('message', 5000);

if ($name === '' || $email === '' || $inquiryType === '' || $message === '') {
    redirect_to('/contact/?error=missing');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_to('/contact/?error=email');
}

$subject = 'Website inquiry: ' . $inquiryType;
$body = implode("\n", [
    'Name: ' . $name,
    'Email: ' . $email,
    'Inquiry type: ' . $inquiryType,
    '',
    'Message:',
    $message,
    '',
    '--',
    'Sent from the joshuahoffman.studio contact form.',
]);

$headers = implode("\r\n", [
    'From: Joshua Hoffman Studio <' . $siteEmail . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
]);

if (mail($recipient, $subject, $body, $headers)) {
    redirect_to($successPath);
}

redirect_to($errorPath);
