import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import type { Metadata } from "next";

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
      <form
        action="/api/contact"
        method="post"
        className="grid max-w-2xl gap-4"
      >
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
    </PageShell>
  );
}
