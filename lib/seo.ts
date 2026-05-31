import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

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
