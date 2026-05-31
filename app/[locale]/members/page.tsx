import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { pageAlternates } from "@/lib/seo";
import { BOARD, AMBASSADORS, type TeamMember } from "@/lib/team";
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
    alternates: pageAlternates(locale, "/members"),
  };
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <li className="overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
      <div className="relative aspect-square w-full bg-brand-mist">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="font-display text-lg font-semibold text-brand-ink">
          {member.name}
        </p>
        <p className="mt-1 text-sm font-medium text-brand-red">{member.role}</p>
        <p className="mt-0.5 text-sm text-brand-ink/60">{member.title}</p>
      </div>
    </li>
  );
}

export default async function MembersPage({
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
      title={t("members")}
      intro="The volunteers behind French Tech Copenhagen — a board and a team of ambassadors building bridges between the French and Danish tech ecosystems."
    >
      <section>
        <h2 className="font-display text-2xl font-semibold text-brand-ink">
          Board
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOARD.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-brand-ink">
          Ambassadors
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {AMBASSADORS.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
