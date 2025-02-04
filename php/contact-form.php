<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'tumelomahlaela88@gmail.com'; // Replace with your email
        $mail->Password = 'lupu derq mede shva'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('calvincante1@gmail.com'); // Replace with the recipient's email

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Makhosi weZulu website';

        // Email body with footer
        $footerContent = "© 2025 Makhosi weZulu. All rights reserved.";

        $mail->Body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ccc; text-align: center; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Message:</strong> $message</p>
                <div class='footer'>
                    $footerContent
                </div>
            </body>
            </html>
        ";

        $mail->send();
        header('Location: ../message-sent.html');
        exit();
    } catch (Exception $e) {
        header('Location: ../message-not-sent.html');
        exit();
    }
}
?>