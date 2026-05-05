import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") ?? "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // TODO: wire Mailchimp / Brevo once the list ID + API key are set.
  console.info("[newsletter] subscribe", email);

  return NextResponse.json({ ok: true });
}
