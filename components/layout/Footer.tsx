import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";

const COLUMNS = [
  {
    titleKey: "community",
    links: [
      { href: "/community/startups", labelKey: "startups" },
      { href: "/community/members", labelKey: "members" },
      { href: "/community/mentors", labelKey: "mentors" },
    ],
  },
  {
    titleKey: "resources",
    links: [
      { href: "/programs", labelKey: "programs" },
      { href: "/resources", labelKey: "resources" },
      { href: "/news", labelKey: "news" },
    ],
  },
  {
    titleKey: "about",
    links: [
      { href: "/about", labelKey: "about" },
      { href: "/partners", labelKey: "partners" },
      { href: "/press", labelKey: "press" },
      { href: "/contact", labelKey: "contact" },
    ],
  },
] as const;

const SOCIALS = [
  { href: "https://www.linkedin.com/company/la-french-tech-nordics", label: "LinkedIn" },
  { href: "https://www.instagram.com/frenchtechnordics/", label: "Instagram" },
];

export function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const tSite = useTranslations("site");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-brand-ink/5 bg-brand-mist">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)]">
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
        {COLUMNS.map((col) => (
          <div key={col.titleKey}>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
              {tNav(col.titleKey)}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((link) => (
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
        ))}
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
