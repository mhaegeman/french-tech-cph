import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

const PROGRAMS = [
  {
    title: "Soft-landing FR → DK",
    body: "From legal entity setup to first hires — a step-by-step path for French startups entering Denmark.",
    href: "/programs/soft-landing",
    scope: "local" as const,
  },
  {
    title: "French Tech Next40/120",
    body: "Government program supporting France's leading scale-ups.",
    href: "https://lafrenchtech.gouv.fr/en/programme/french-tech-next40-120/",
    scope: "national" as const,
  },
  {
    title: "French Tech 2030",
    body: "Deeptech and strategic-sector startup support program.",
    href: "https://lafrenchtech.gouv.fr/en/programme/french-tech-2030/",
    scope: "national" as const,
  },
  {
    title: "French Tech Tremplin",
    body: "Equal-opportunity program for under-represented founders.",
    href: "https://lafrenchtech.gouv.fr/en/programme/french-tech-tremplin/",
    scope: "national" as const,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("programs") };
}

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      title={t("programs")}
      intro="Local FT Copenhagen programs plus the national programs run by La Mission French Tech."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {PROGRAMS.map((p) => {
          const external = p.href.startsWith("http");
          return (
            <li
              key={p.title}
              className="rounded-2xl border border-brand-ink/5 bg-white p-6"
            >
              <span className="eyebrow">
                {p.scope === "local" ? "Local · CPH" : "National · France"}
              </span>
              <h2 className="mt-2 font-display text-xl font-semibold text-brand-ink">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-brand-ink/70">{p.body}</p>
              {external ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-red hover:underline"
                >
                  Learn more →
                </a>
              ) : (
                <Link
                  href={p.href}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-red hover:underline"
                >
                  Learn more →
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
