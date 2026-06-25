import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
import { pageAlternates } from "@/lib/seo";
import { PICTURES } from "@/lib/pictures";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: t("pictures"),
    alternates: pageAlternates(locale, "/pictures"),
  };
}

export default async function PicturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <PageShell
      eyebrow="French Tech Copenhagen"
      title={t("pictures")}
      intro="Moments from our breakfasts, panels, dinners and meet-ups — a look at what it's like to be part of the community."
    >
      {PICTURES.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PICTURES.map((p) => (
            <li
              key={p.src}
              className="overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full bg-brand-mist">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              {p.caption && (
                <p className="px-4 py-3 text-sm text-brand-ink/70">
                  {p.caption}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-ink/5 bg-white px-6 py-16 text-center shadow-sm">
          <p className="max-w-md text-brand-ink/70">
            Photos from our events are coming soon. In the meantime, follow us on
            LinkedIn or come meet us at the next one.
          </p>
          <Link href="/events" className="btn-primary">
            See events
          </Link>
        </div>
      )}
    </PageShell>
  );
}
