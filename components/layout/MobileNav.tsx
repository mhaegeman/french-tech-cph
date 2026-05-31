"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

const MOBILE_NAV_ITEMS = [
  { href: "/about", labelKey: "about" },
  { href: "/community", labelKey: "community" },
  { href: "/events", labelKey: "events" },
  { href: "/programs", labelKey: "programs" },
  { href: "/members", labelKey: "members" },
  { href: "/partners", labelKey: "partners" },
  { href: "/resources", labelKey: "resources" },
  { href: "/news", labelKey: "news" },
  { href: "/press", labelKey: "press" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function MobileNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/10 bg-white text-brand-ink transition hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink/20"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 top-16 z-30 bg-brand-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-x-0 top-16 z-40 origin-top border-b border-brand-ink/5 bg-white shadow-lg transition-transform duration-200 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex flex-col gap-1 py-4"
        >
          {MOBILE_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink/80 hover:bg-brand-mist hover:text-brand-ink"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
