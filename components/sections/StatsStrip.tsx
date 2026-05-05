import { useTranslations } from "next-intl";

type Props = {
  members: number;
  startups: number;
  events: number;
  partners: number;
};

export function StatsStrip({ members, startups, events, partners }: Props) {
  const t = useTranslations("home");
  const items = [
    { value: members, label: t("stats.members") },
    { value: startups, label: t("stats.startups") },
    { value: events, label: t("stats.events") },
    { value: partners, label: t("stats.partners") },
  ];
  return (
    <section className="border-y border-brand-ink/5 bg-white">
      <div className="container-page grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <div className="font-display text-3xl font-bold text-brand-red sm:text-4xl">
              {it.value}+
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-brand-ink/60">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
