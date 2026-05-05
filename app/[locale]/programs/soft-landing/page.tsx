import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";

const STEPS = [
  { n: 1, t: "Discovery call", b: "30-min intro to map your goals onto the Danish ecosystem." },
  { n: 2, t: "Market & legal briefing", b: "Tax, residency, hiring, banking — what to know in week one." },
  { n: 3, t: "Intros to partners", b: "Embassy, Business France, CCIF DK, accelerators, banks." },
  { n: 4, t: "Talent & hiring", b: "Connect with recruiters and curated French-speaking talent." },
  { n: 5, t: "Customer & investor intros", b: "Warm intros to Danish investors and corporate buyers." },
];

export default async function SoftLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      eyebrow="Programs"
      title="Soft-landing in Denmark"
      intro="A guided path for French founders setting up in Copenhagen — practical, opinionated, free."
    >
      <ol className="space-y-4">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="flex gap-4 rounded-2xl border border-brand-ink/5 bg-white p-6"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
              {s.n}
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-brand-ink">
                {s.t}
              </h2>
              <p className="mt-1 text-sm text-brand-ink/70">{s.b}</p>
            </div>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
