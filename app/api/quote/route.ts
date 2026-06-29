import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

/* Lead sink for the quote form.
   Full pipeline support for:
   - Resend (email to hello@suncoatpainting.com + confirmation)
   - Telegram (alert)
   - HubSpot (create contact)
   - OpenPhone (SMS alert)
   - Logs to console

   Required env vars in Netlify:
   - RESEND_API_KEY
   - TELEGRAM_BOT_TOKEN
   - TELEGRAM_CHAT_ID
   - HUBSPOT_PRIVATE_APP_TOKEN
   - OPENPHONE_API_KEY
   - OPENPHONE_PHONE_NUMBER_ID (the number to send SMS from)
*/

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
    squareFootage: String(body.squareFootage ?? "").trim(),
    details: String(body.details ?? "").trim(),
    source: String(body.source ?? "unknown"),
    receivedAt: new Date().toISOString(),
  };

  console.log("[quote] new lead", lead);

  // Send email notification via Resend
  if (resend) {
    try {
      const subject = `New Lead: ${lead.name} - ${lead.phone}`;
      const html = `
        <h2>New Painting Quote Request</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>
        <p><strong>Email:</strong> ${lead.email || "Not provided"}</p>
        <p><strong>Location / Address:</strong> ${lead.address || "Not provided"}</p>
        <p><strong>Square Footage:</strong> ${lead.squareFootage || "Not provided"}</p>
        <p><strong>Source:</strong> ${lead.source}</p>
        <p><strong>Details:</strong><br/>${lead.details ? lead.details.replace(/\n/g, "<br/>") : "None provided"}</p>
        <p><strong>Received:</strong> ${lead.receivedAt}</p>
        <hr/>
        <p><a href="${siteConfig.url}/contact">View in admin</a> | Reply directly to customer</p>
      `;

      await resend.emails.send({
        from: `SunCoat Painting <hello@suncoatpainting.com>`,
        to: siteConfig.email,
        subject,
        html,
        replyTo: lead.email || undefined,
      });

      // Optional: Send confirmation to the lead
      if (lead.email) {
        await resend.emails.send({
          from: `SunCoat Painting <hello@suncoatpainting.com>`,
          to: lead.email,
          subject: `Thanks for your quote request, ${lead.name}!`,
          html: `
            <p>Hi ${lead.name},</p>
            <p>Thank you for reaching out to SunCoat Painting. We've received your request and will contact you shortly (usually within 15 minutes during business hours).</p>
            <p><strong>Your details:</strong></p>
            <ul>
              <li>Phone: ${lead.phone}</li>
              <li>Location: ${lead.address || "Not provided"}</li>
              <li>Square Footage: ${lead.squareFootage || "Not provided"}</li>
            </ul>
            <p>Best regards,<br/>The SunCoat Painting Team</p>
            <p><a href="${siteConfig.url}">${siteConfig.url}</a> | ${siteConfig.phoneDisplay}</p>
          `,
        });
      }
    } catch (e) {
      console.error("[quote] Resend email failed", e);
      // Don't fail the request if email fails - still return success to user
    }
  } else {
    console.warn("[quote] RESEND_API_KEY not set - email not sent");
  }

  // Telegram notification
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChatId = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChatId) {
    const tgText =
      `🎨 New lead from ${lead.source}\n` +
      `Name: ${lead.name}\nPhone: ${lead.phone}\n` +
      `Email: ${lead.email || "N/A"}\n` +
      `Location: ${lead.address || "N/A"}\n` +
      `Sq Ft: ${lead.squareFootage || "N/A"}\n` +
      `Details: ${lead.details || "N/A"}`;
    try {
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChatId, text: tgText }),
      });
    } catch (e) {
      console.error("[quote] Telegram failed", e);
    }
  }

  // HubSpot: Create or update contact
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (hubspotToken) {
    try {
      const contactData = {
        properties: {
          firstname: lead.name.split(" ")[0] || lead.name,
          lastname: lead.name.split(" ").slice(1).join(" ") || "",
          phone: lead.phone,
          email: lead.email || undefined,
          city: lead.address || undefined,
          hs_lead_status: "NEW",
          lead_source: lead.source,
          notes: lead.details || "",
        },
      };

      const hsRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hubspotToken}`,
        },
        body: JSON.stringify(contactData),
      });

      if (!hsRes.ok) {
        const err = await hsRes.text();
        console.error("[quote] HubSpot contact creation failed:", err);
      }
    } catch (e) {
      console.error("[quote] HubSpot error", e);
    }
  }

  // OpenPhone: Send SMS alert
  const openPhoneKey = process.env.OPENPHONE_API_KEY;
  const openPhoneFrom = process.env.OPENPHONE_PHONE_NUMBER_ID;
  if (openPhoneKey && openPhoneFrom) {
    try {
      const smsText = `New lead: ${lead.name} (${lead.phone}) - ${lead.address || ""}. ${lead.details?.slice(0, 100) || ""}`;
      await fetch("https://api.openphone.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openPhoneKey}`,
        },
        body: JSON.stringify({
          from: openPhoneFrom,
          to: [siteConfig.phoneDisplay.replace(/\D/g, "")],
          content: smsText,
        }),
      });
    } catch (e) {
      console.error("[quote] OpenPhone error", e);
    }
  }

  return NextResponse.json({ ok: true });
}
