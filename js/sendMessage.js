const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'tumelomahlaela88@gmail.com',
            pass:'bqkodorvwuwfjkke '
        }
    }
);

const name = document.getElementById('full-name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('text-area').value;
const submitBtn = document.getElementById('submit-btn');



submitBtn.addEventListener('click', () => {
    
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                padding: 20px;
            }
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            p {
                line-height: 1.6;
            }
            .footer {
                margin-top: 20px;
                font-size: 0.9em;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <p><strong>A message from Makhosi weZulu website</strong></p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 Makhosi weZulu. All rights reserved.</p>
        </div>
    </body>
    </html>
`;
   transporter.sendMail({
    to:"makhosiwezulu@gmail.com",
    subject:subject,
    html:htmlTemplate
   });

   console.log("Email sent");
});

