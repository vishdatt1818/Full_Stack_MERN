// import nodemailer from 'nodemailer'; // Or use const nodemailer = require('nodemailer');
const nodemailer = require("nodemailer");

const emailSender = (email,payload) =>{

    // 1. Initialize the transporter using your delivery credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,       // Your full email address
    pass: process.env.EMAIL_APP_PASS,   // 16-character App Password (not your account login)
  },
});

// 2. Draft the mail composition
const mailOptions = {
 from: `"vish" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: payload.subject,
  text: 'Hello from Node.js! This is a plain text alternative body.',
  html: payload.html,
};

// 3. Dispatch the message
async function dispatchEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email successfully dispatched! Message ID:', info.messageId);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

dispatchEmail();

}
module.exports = emailSender

