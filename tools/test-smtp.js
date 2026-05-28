const nodemailer = require('nodemailer');

const host = process.env.SMTP_HOST || 'smtp.gmail.com';
const port = Number(process.env.SMTP_PORT || 587);
const secure = (process.env.SMTP_SECURE === 'true');
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASS || '';

console.log('SMTP test parameters:', { host, port, secure, user: user ? '***' : '(empty)', pass: pass ? '***' : '(empty)' });

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  tls: { rejectUnauthorized: false },
  auth: { user, pass },
});

(async () => {
  try {
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('Connection and authentication OK');
  } catch (err) {
    console.error('Verification failed:');
    console.error(err);
    process.exitCode = 2;
  }
})();
