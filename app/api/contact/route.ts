import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const payload = {
    name: form.get("name"),
    email: form.get("email"),
    reason: form.get("reason"),
    message: form.get("message"),
  };

  // TODO: wire Resend (or similar) once API key is set.
  // For now we just log the payload so local dev still works without secrets.
  console.info("[contact]", payload);

  return NextResponse.json({ ok: true });
}
