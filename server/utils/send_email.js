const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.GRID_USERNAME,
      pass: process.env.GRID_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
