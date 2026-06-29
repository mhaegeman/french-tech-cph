import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://frenchtechcopenhagen.com";

const LINKEDIN_URL = "https://www.linkedin.com/company/frenchtechcopenhagen/";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "frenchtechcopenhagen@gmail.com";

/**
 * Schema.org Organization markup for the association.
 *
 * This is the single most useful thing for search engines to recognise the
 * site as *the* entity people mean when they type the association name. The
 * `alternateName` list covers the common spellings ("La French Tech
 * Copenhagen", the French capitalisation, etc.) so the brand query matches.
 *
 * Rendered as a JSON-LD <script> in the locale layout.
 */
export function organizationJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    alternateName: [
      "La French Tech Copenhagen",
      "French Tech Copenhagen",
      "La French Tech Copenhague",
      "French Tech Copenhague",
    ],
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo-light.png`,
    image: `${SITE_URL}/og.png`,
    description,
    email: CONTACT_EMAIL,
    sameAs: [LINKEDIN_URL],
    areaServed: "Copenhagen, Denmark",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressCountry: "DK",
      },
    },
  };
}

/**
 * Search-engine ownership verification meta tags, wired from build-time env.
 *
 * Add the codes from Google Search Console / Bing Webmaster Tools as repo
 * Actions variables (GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION) and
 * they get emitted into <head>. Returns `undefined` when none are set so we
 * don't render empty tags.
 */
export function siteVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;
  if (!google && !bing) return undefined;

  const verification: NonNullable<Metadata["verification"]> = {};
  if (google) verification.google = google;
  if (bing) verification.other = { "msvalidate.01": bing };
  return verification;
}

/**
 * Build per-page `alternates` for canonical + hreflang.
 *
 * The locale layout intentionally does NOT set `alternates`, because Next.js
 * inherits it down the tree and we'd end up emitting the locale-home URL as
 * the canonical for every nested page. Each `generateMetadata` calls this
 * helper with its own route path so SEO is correct per page.
 *
 * Pass the route relative to the locale segment, e.g. "/about", not
 * "/en/about".
 */
export function pageAlternates(
  locale: string,
  path: string,
): NonNullable<Metadata["alternates"]> {
  const normalized = path === "/" || path === "" ? "" : ensureLeadingSlash(path);
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${normalized}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${normalized}`;
  return {
    canonical: `/${locale}${normalized}`,
    languages,
  };
}

function ensureLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
