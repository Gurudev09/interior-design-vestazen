const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  // Configure your email transport here
  // Example using Gmail SMTP (replace with your credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password',
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: 'your-email@gmail.com',
      subject: `New Inquiry from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
