import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { getMentors } from "@/lib/directories";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: t("mentors"),
    alternates: pageAlternates(locale, "/community/mentors"),
  };
}

export default async function MentorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const mentors = await getMentors();

  return (
    <PageShell
      eyebrow={t("community")}
      title={t("mentors")}
      intro="Volunteer mentors offering office hours, intros and feedback. Want to mentor? Get in touch."
    >
      {mentors.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2">
          {mentors.map((m) => (
            <li
              key={m.id}
              className="rounded-2xl border border-brand-ink/5 bg-white p-6"
            >
              <p className="font-display text-lg font-semibold text-brand-ink">
                {m.name}
              </p>
              {m.bio && (
                <p className="mt-2 text-sm text-brand-ink/70">{m.bio}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full bg-brand-mist px-2.5 py-1 text-xs font-medium text-brand-ink/70"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-mist p-8 text-sm text-brand-ink/60">
          Coming soon. The mentor directory will be populated once the community database is connected.
        </p>
      )}
    </PageShell>
  );
}
