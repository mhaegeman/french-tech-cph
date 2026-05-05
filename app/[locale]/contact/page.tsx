import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import type { Metadata } from "next";

const FORM_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@frenchtechcph.dk";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("contact") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("contact")}
      intro="Tell us what you're working on — joining as a member, partnering, becoming a mentor, or press."
    >
      {FORM_URL ? (
        <form action={FORM_URL} method="post" className="grid max-w-2xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-brand-ink">Name</span>
              <input
                required
                name="name"
                className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
              />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-brand-ink">Email</span>
              <input
                required
                type="email"
                name="email"
                className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
              />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-brand-ink">Reason</span>
            <select
              name="reason"
              className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
            >
              <option value="join">Join the community</option>
              <option value="mentor">Become a mentor</option>
              <option value="partner">Partnership</option>
              <option value="press">Press</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-brand-ink">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="rounded-lg border border-brand-ink/15 bg-white px-3 py-2.5 text-sm focus:border-brand-ink focus:outline-none"
            />
          </label>
          <button type="submit" className="btn-primary w-fit">
            Send
          </button>
        </form>
      ) : (
        <div className="max-w-2xl rounded-2xl border border-brand-ink/5 bg-white p-8">
          <p className="text-brand-ink/80">
            The fastest way to reach us is by email. Tell us what you&apos;re
            working on and how we can help — we read everything.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hello French Tech Copenhagen")}`}
            className="btn-primary mt-6 inline-flex"
          >
            Email {CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-xs text-brand-ink/50">
            A submission form will appear here once
            <code className="mx-1 rounded bg-brand-mist px-1.5 py-0.5 text-[10px]">
              NEXT_PUBLIC_CONTACT_FORM_URL
            </code>
            is set (e.g. a Formspree endpoint).
          </p>
        </div>
      )}
    </PageShell>
  );
}
