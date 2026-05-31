import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/about", labelKey: "about" },
  { href: "/members", labelKey: "members" },
  { href: "/events", labelKey: "events" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/5 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center font-display text-lg font-bold tracking-tight text-brand-ink"
          aria-label={tSite("name")}
        >
          French Tech&nbsp;<span className="text-brand-red">Copenhagen</span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-base font-medium text-brand-ink/80 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-ink"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/frenchtechcopenhagen/"
            target="_blank"
            rel="noreferrer"
            aria-label="French Tech Copenhagen on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:bg-[#084d92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M20.452 20.452h-3.555v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <LocaleSwitcher />
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            {t("contact")}
          </Link>
        </div>
      </div>
    </header>
  );
}
