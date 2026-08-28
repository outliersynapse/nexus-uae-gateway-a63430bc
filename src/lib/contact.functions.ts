import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().max(200).optional(),
  email: z.string().email().max(320),
  phone: z.string().max(60).optional(),
  country: z.string().max(120).optional(),
  service: z.string().max(120).optional(),
  requirement: z.string().min(1).max(5000),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(d: z.infer<typeof inputSchema>, siteUrl: string): string {
  const row = (label: string, value?: string) =>
    value
      ? `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e8e8e8;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;width:150px;vertical-align:top;">${label}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e8e8e8;font-size:15px;color:#1a2233;">${escapeHtml(value)}</td>
        </tr>`
      : "";

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f4f4f6;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <div style="background:#0e1a2f;padding:28px 32px;">
      <div style="color:#c9a24b;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:8px;">New Website Enquiry</div>
      <div style="color:#ffffff;font-size:22px;font-family:Georgia,serif;">AD Nexus Gateway</div>
    </div>
    <div style="background:#ffffff;padding:24px 16px 8px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${row("Name", d.name)}
        ${row("Email", d.email)}
        ${row("Phone", d.phone)}
        ${row("Company", d.company)}
        ${row("Country", d.country)}
        ${row("Service", d.service)}
      </table>
      <div style="padding:20px 16px 8px;">
        <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;margin-bottom:8px;">Message</div>
        <div style="font-size:15px;line-height:1.6;color:#1a2233;white-space:pre-wrap;">${escapeHtml(d.requirement)}</div>
      </div>
      <div style="padding:16px;">
        <a href="mailto:${encodeURIComponent(d.email)}" style="display:inline-block;background:#c9a24b;color:#0e1a2f;text-decoration:none;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;padding:12px 24px;">Reply to Enquiry</a>
      </div>
    </div>
    <div style="background:#0e1a2f;padding:16px 32px;">
      <div style="color:#8a93a6;font-size:11px;line-height:1.6;">
        This email was sent automatically from the enquiry form on
        <a href="${escapeHtml(siteUrl)}" style="color:#c9a24b;text-decoration:none;">${escapeHtml(siteUrl)}</a>.
      </div>
    </div>
  </div>
</body></html>`;
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const to = process.env["CONTACT_TO_EMAIL"];
    const from = process.env["CONTACT_FROM_EMAIL"];
    const siteUrl = process.env["SITE_URL"] ?? "";
    if (!apiKey || !to || !from) {
      throw new Error("Email environment variables are not configured");
    }

    const payload = JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `New Enquiry — ${data.name} (${data.service || "General"})`,
      html: buildHtml(data, siteUrl),
    });

    const send = () =>
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: payload,
      });

    // Resend rate-limits bursts (429) and can return transient 5xx —
    // retry a couple of times with backoff before surfacing an error.
    let response = await send();
    for (let attempt = 0; attempt < 2 && (response.status === 429 || response.status >= 500); attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 1200 * (attempt + 1)));
      response = await send();
    }

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      throw new Error(`Email send failed [${response.status}]`);
    }

    const result = (await response.json()) as { id?: string };
    console.log(`Resend accepted enquiry email id=${result.id ?? "unknown"} to=${to} from=${from}`);

    return { ok: true };
  });
