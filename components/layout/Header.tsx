import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/about", labelKey: "about" },
  { href: "/community", labelKey: "community" },
  { href: "/events", labelKey: "events" },
  { href: "/programs", labelKey: "programs" },
  { href: "/resources", labelKey: "resources" },
  { href: "/news", labelKey: "news" },
  { href: "/partners", labelKey: "partners" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/5 bg-white/80 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Logo className="lg:h-20" />
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
          <LocaleSwitcher />
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            {t("contact")}
          </Link>
        </div>
      </div>
    </header>
  );
}
