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

const SOCIALS = [
  { href: "https://www.linkedin.com/company/frenchtechcopenhagen/", label: "LinkedIn" },
];

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
          <div className="mt-5 flex gap-3 text-xs font-semibold">
            {SOCIALS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-ink/15 bg-white px-3 py-1.5 hover:bg-white"
              >
                {s.label}
              </a>
            ))}
          </div>
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
