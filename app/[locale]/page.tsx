import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { Verticals } from "@/components/sections/Verticals";
import { FeaturedStartups } from "@/components/sections/FeaturedStartups";
import { PartnersBand } from "@/components/sections/PartnersBand";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import {
  getMembers,
  getPartners,
  getStartups,
} from "@/lib/directories";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: pageAlternates(locale, "/") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [members, startups, partners] = await Promise.all([
    getMembers(),
    getStartups({ featuredOnly: true }),
    getPartners(),
  ]);

  return (
    <>
      <Hero />
      <StatsStrip
        members={members.length}
        startups={startups.length}
        events={20}
        partners={partners.length}
      />
      <AboutTeaser />
      <UpcomingEvents />
      <Verticals />
      <FeaturedStartups startups={startups.slice(0, 6)} />
      <PartnersBand partners={partners} />
      <NewsletterCTA />
    </>
  );
}
