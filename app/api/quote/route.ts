import { NextResponse } from "next/server";

/* Lead sink for the quote form.
   Wire to your usual pipeline (Resend / Telegram / HubSpot) via env vars.
   For now it validates, logs, and (optionally) pings Telegram if configured. */

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "name and phone required" }, { status: 422 });
  }

  const lead = {
    name,
    phone,
    email: String(body.email ?? "").trim(),
    address: String(body.address ?? "").trim(),
    details: String(body.details ?? "").trim(),
    source: String(body.source ?? "unknown"),
    receivedAt: new Date().toISOString(),
  };

  console.log("[quote] new lead", lead);

  // Optional: Telegram notification if env vars are present.
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (token && chatId) {
    const text =
      `🎨 New painting lead\n` +
      `Name: ${lead.name}\nPhone: ${lead.phone}\n` +
      `Email: ${lead.email || "-"}\nLocation: ${lead.address || "-"}\n` +
      `Source: ${lead.source}\nDetails: ${lead.details || "-"}`;
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
    } catch (e) {
      console.error("[quote] telegram failed", e);
    }
  }

  // TODO: add Resend email + HubSpot contact here when keys are provided.

  return NextResponse.json({ ok: true });
}
