"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";

const LABELS: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  da: "DA",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-1 rounded-full border border-brand-ink/10 bg-white p-1 text-xs font-semibold"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            disabled={isPending || active}
            aria-pressed={active}
            className={
              active
                ? "rounded-full bg-brand-ink px-2.5 py-1 text-white"
                : "rounded-full px-2.5 py-1 text-brand-ink/70 hover:bg-brand-mist"
            }
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: l });
              });
            }}
          >
            {LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
