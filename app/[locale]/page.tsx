import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";

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

  return (
    <>
      <Hero />
      <AboutTeaser />
      <UpcomingEvents />
      <NewsletterCTA />
    </>
  );
}
