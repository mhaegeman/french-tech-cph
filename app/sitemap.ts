import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/about",
  "/community",
  "/community/startups",
  "/community/members",
  "/community/mentors",
  "/events",
  "/programs",
  "/programs/soft-landing",
  "/resources",
  "/resources/doing-business-in-denmark",
  "/resources/doing-business-in-france",
  "/resources/ecosystem-map",
  "/news",
  "/partners",
  "/contact",
  "/press",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://frenchtechcph.dk";

  return ROUTES.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
