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

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <li className="overflow-hidden rounded-2xl border border-brand-ink/5 bg-white shadow-sm">
      <div className="relative aspect-square w-full bg-brand-mist">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-display text-4xl font-semibold text-brand-ink/40"
          >
            {initials(member.name)}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-display text-lg font-semibold text-brand-ink">
          {member.name}
        </p>
        <p className="mt-1 text-sm font-medium text-brand-red">{member.role}</p>
        <p className="mt-0.5 text-sm text-brand-ink/60">{member.title}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#0A66C2] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M20.452 20.452h-3.555v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        )}
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
      intro="The volunteers behind French Tech Copenhagen: a board and a team of ambassadors building bridges between the French and Danish tech ecosystems."
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
