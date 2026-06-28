import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) return false;
  recent.push(now);
  submissions.set(ip, recent);
  return true;
}

export const POST = async (request: Request) => {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Trop de requetes. Reessayez dans une minute." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    if (typeof name !== "string" || name.length > MAX_NAME) {
      return NextResponse.json(
        { message: "Nom invalide." },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || email.length > MAX_EMAIL) {
      return NextResponse.json(
        { message: "Email invalide." },
        { status: 400 },
      );
    }

    if (typeof message !== "string" || message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { message: "Message trop long." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const htmlTemplate = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">Nouveau message du Portfolio</h2>
        <p style="font-size: 16px; color: #555;">Vous avez recu un nouveau message de votre portfolio.</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; width: 100px;">Nom:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #333;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888;">Email:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #333;">${safeEmail}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0070f3; color: #444; font-style: italic;">
          "${safeMessage}"
        </div>
        <footer style="margin-top: 30px; font-size: 12px; color: #aaa; text-align: center;">
          Envoye via le formulaire de contact du Portfolio.
        </footer>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.NODEMAILER_EMAIL}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.NODEMAILER_EMAIL,
      subject: `Portfolio: ${safeName}`,
      text: `${message} | Envoye par: ${email}`,
      html: htmlTemplate,
    });

    return NextResponse.json(
      { message: "Email envoye avec succes!" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Erreur lors de l'envoi" },
      { status: 500 },
    );
  }
};
