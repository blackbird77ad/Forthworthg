const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configure your Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password'    // Replace with your email password
    }
});

// Route to handle form submission
app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Replace with your personal email
        subject: `Contact Form Submission: ${subject}`,
        text: `You received a new message from:
    Name: ${name}
    Email: ${email}
    Message: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to send message' });
        }
        res.status(200).json({ message: 'Message sent successfully' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
