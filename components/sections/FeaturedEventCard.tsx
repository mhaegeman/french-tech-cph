import type { FeaturedEvent } from "@/lib/events";

export function FeaturedEventCard({ event }: { event: FeaturedEvent }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-red/15 bg-white shadow-sm">
      <div className="border-b border-brand-red/10 bg-brand-red/5 px-6 py-3">
        <p className="eyebrow">Featured event</p>
      </div>
      <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr,1fr]">
        <div>
          <h3 className="font-display text-2xl font-bold text-brand-ink">
            {event.title}
          </h3>
          <p className="mt-4 whitespace-pre-line text-brand-ink/75">
            {event.description}
          </p>
          {event.audience && event.audience.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-brand-ink">
                Who it&apos;s for
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {event.audience.map((a) => (
                  <li
                    key={a}
                    className="rounded-full bg-brand-mist px-3 py-1 text-sm text-brand-ink/80"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="lg:border-l lg:border-brand-ink/5 lg:pl-8">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-brand-ink">When</dt>
              <dd className="text-brand-ink/70">{event.date}</dd>
              {event.time && (
                <dd className="text-brand-ink/60">{event.time}</dd>
              )}
            </div>
            {(event.locationStart || event.locationEnd) && (
              <div>
                <dt className="font-semibold text-brand-ink">Where</dt>
                {event.locationStart && (
                  <dd className="text-brand-ink/70">
                    Start: {event.locationStart}
                  </dd>
                )}
                {event.locationEnd && (
                  <dd className="text-brand-ink/70">
                    Finish: {event.locationEnd}
                  </dd>
                )}
              </div>
            )}
          </dl>
          <div className="mt-6 flex flex-col gap-3">
            {event.links.map((link) => (
              <div key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    link.primary
                      ? "btn-primary w-full"
                      : "btn-secondary w-full"
                  }
                >
                  {link.label}
                </a>
                {link.note && (
                  <p className="mt-1.5 text-center text-xs text-brand-ink/60">
                    {link.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
