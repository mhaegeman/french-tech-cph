"use client";

import { useState } from "react";

const REASONS = [
  { value: "join", label: "Join the community" },
  { value: "partner", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
] as const;

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [reason, setReason] = useState<string>(REASONS[0].value);
  const [message, setMessage] = useState("");

  const reasonLabel =
    REASONS.find((r) => r.value === reason)?.label ?? "Hello";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${reasonLabel}: ${name || "French Tech Copenhagen"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${from}`,
      `Reason: ${reasonLabel}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid max-w-2xl gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-brand-ink">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-brand-ink">Your email</span>
          <input
            required
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-brand-ink">Reason</span>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
        >
          {REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-brand-ink">Message</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
        />
      </label>
      <button type="submit" className="btn-primary w-fit">
        Send email
      </button>
      <p className="text-xs text-brand-ink/50">
        This opens your email app with the message pre-filled to{" "}
        <a
          href={`mailto:${email}`}
          className="font-semibold text-brand-red hover:underline"
        >
          {email}
        </a>
        .
      </p>
    </form>
  );
}
