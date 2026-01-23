import nodemailer from "nodemailer";
 
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
 
    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const email = String(body?.email || "").trim();
    const profession = String(body?.profession || "").trim();
    const message = String(body?.message || "").trim();
 
    if (!name || !message) {
      return Response.json({ ok: false, error: "Name and message are required." }, { status: 400 });
    }
 
    // If real SMTP is configured, use it. Otherwise use Ethereal (test inbox).
    const hasRealSmtp =
      !!process.env.SMTP_HOST &&
      !!process.env.SMTP_USER &&
      !!process.env.SMTP_PASS &&
      !!process.env.CONTACT_TO_EMAIL;
 
    let transporter: nodemailer.Transporter;
    let fromEmail: string;
    let toEmail: string;
 
    if (hasRealSmtp) {
      const host = process.env.SMTP_HOST!;
      const port = Number(process.env.SMTP_PORT || "465");
      const secure = String(process.env.SMTP_SECURE || "true") === "true";
      const user = process.env.SMTP_USER!;
      const pass = process.env.SMTP_PASS!;
      toEmail = process.env.CONTACT_TO_EMAIL!;
      fromEmail = user;
 
      transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      fromEmail = testAccount.user;
      toEmail = testAccount.user; // send to the test inbox
    }
 
    const subject = `New website inquiry — ${name}`;
    const text = [
      `Name: ${name}`,
      `Profession: ${profession || "-"}`,
      `Phone: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message,
    ].join("\n");
 
    const info = await transporter.sendMail({
      from: `"Website Contact" <${fromEmail}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject,
      text,
    });
 
    const previewUrl = nodemailer.getTestMessageUrl(info) || null;
 
    return Response.json({ ok: true, previewUrl });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to send message.";
    return Response.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
