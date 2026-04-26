import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ritishdas116@gmail.com",
    pass: process.env.GOOGLE_APP_PASS,
  }
});

type mail = {
  to: string;
  subject: string;
  body: string;
};

export async function sendMail({ to, subject, body }: mail) {
  const info = await transporter.sendMail({
    from: 'ritishdas116@gmail.com',
    to: to,
    subject: subject,
    html: body,
  });

  console.log("Message sent:", info.messageId);
};
