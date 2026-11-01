type Environment = { RESEND_API_KEY?: string; RESEND_FROM_EMAIL?: string };
type Payload = Record<string, unknown>;

const recipient = "ccrmjuly2022@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reply = (body: object, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";

export async function handleWebsiteMail(request: Request, env: Environment, kind: "contact" | "newsletter") {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) return reply({ error: "Please submit this form from the CCRM website." }, 403);
  if (!request.headers.get("Content-Type")?.includes("application/json")) return reply({ error: "Invalid request format." }, 415);
  let payload: Payload;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).length > 12000) return reply({ error: "Your message is too long." }, 413);
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return reply({ error: "Invalid form data." }, 400);
    payload = parsed as Payload;
  } catch { return reply({ error: "Invalid form data." }, 400); }
  if (clean(payload.website)) return reply({ ok: true });
  const email = clean(payload.email);
  if (!emailPattern.test(email) || email.length > 254) return reply({ error: "Please provide a valid email address." }, 400);
  let subject: string;
  let text: string;
  if (kind === "contact") {
    const name = clean(payload.name), topic = clean(payload.subject), message = clean(payload.message);
    if (!name || !topic || !message) return reply({ error: "Please fill in all required fields." }, 400);
    if (name.length > 120 || topic.length > 200 || message.length > 5000) return reply({ error: "Please shorten your name, subject, or message." }, 400);
    subject = `CCRM website message: ${topic.replace(/[\r\n]/g, " ")}`;
    text = `Name: ${name}\nEmail: ${email}\nSubject: ${topic}\n\n${message}`;
  } else {
    subject = "CCRM newsletter subscription request";
    text = `Please add ${email} to the ministry's newsletter updates.\n\nThis request was submitted through the CCRM website. This is a request for the ministry to follow up, not an automatic mailing-list subscription.`;
  }
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) return reply({ error: "We cannot send your request right now. Please email ccrmjuly2022@gmail.com directly." }, 503);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: env.RESEND_FROM_EMAIL, to: [recipient], reply_to: email, subject, text }),
    });
    if (!response.ok) return reply({ error: "Your request could not be sent. Please try again or email ccrmjuly2022@gmail.com." }, 502);
    return reply({ ok: true });
  } catch { return reply({ error: "Your request could not be sent. Please try again or email ccrmjuly2022@gmail.com." }, 502); }
}
