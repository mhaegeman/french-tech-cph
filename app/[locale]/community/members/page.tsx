import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { getMembers } from "@/lib/directories";
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
    title: t("members"),
    alternates: pageAlternates(locale, "/community/members"),
  };
}

export default async function MembersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const members = await getMembers();

  return (
    <PageShell
      eyebrow={t("community")}
      title={t("members")}
      intro="The directory below is sourced from Airtable so the board can add or remove people without redeploying. Only members who opted in are shown."
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <li
            key={m.id}
            className="rounded-xl border border-brand-ink/5 bg-white p-4"
          >
            <p className="font-semibold text-brand-ink">{m.name}</p>
            <p className="text-sm text-brand-ink/60">
              {[m.role, m.company].filter(Boolean).join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
