import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";

const LINKS = [
  { href: "/about", labelKey: "about" },
  { href: "/members", labelKey: "members" },
  { href: "/events", labelKey: "events" },
  { href: "/contact", labelKey: "contact" },
] as const;

const LEGAL = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/imprint", label: "Imprint" },
] as const;

const LINKEDIN_URL =
  "https://www.linkedin.com/company/frenchtechcopenhagen/";

export function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const tSite = useTranslations("site");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-brand-ink/5 bg-brand-mist">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-prose text-sm text-brand-ink/70">
            {tSite("description")}
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#084d92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M20.452 20.452h-3.555v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {tFooter("followLinkedIn")}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
            {tSite("name")}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-brand-ink/80 hover:text-brand-ink"
                >
                  {tNav(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {LEGAL.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-brand-ink/80 hover:text-brand-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-ink/5">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-brand-ink/60 sm:flex-row sm:items-center">
          <p>
            © {year} {tSite("name")}. {tFooter("rights")}
          </p>
          <p>{tFooter("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
