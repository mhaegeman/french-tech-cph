import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/layout/PageShell";
import { Link } from "@/i18n/navigation";
import { pageAlternates } from "@/lib/seo";
import type { Metadata } from "next";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "frenchtechcopenhagen@gmail.com";

const LAST_UPDATED = "25 June 2026";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy policy",
    alternates: pageAlternates(locale, "/legal/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy policy"
      intro="How we handle personal data on this site, in line with the EU General Data Protection Regulation (GDPR) and Danish data-protection law."
    >
      <div className="prose max-w-prose space-y-8 text-brand-ink/80">
        <p className="text-sm text-brand-ink/50">
          Last updated: {LAST_UPDATED}
        </p>

        <p>
          This policy explains what personal data is collected when you use{" "}
          <strong>frenchtechcopenhagen.com</strong> (the &quot;site&quot;), why
          it is collected, on what legal basis, who it is shared with, and the
          rights you have. We have tried to keep it short and honest, because
          this site collects very little data.
        </p>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            1. Who is responsible for your data
          </h2>
          <p className="mt-3">
            The data controller for this site is the association that legally
            carries French Tech Copenhagen:
          </p>
          <p className="mt-3">
            <strong>
              AEPIFD — Association des Entrepreneurs et Professionnels
              Indépendants Français du Danemark
            </strong>
            <br />
            Copenhagen, Denmark
            <br />
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand-red hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-3">
            AEPIFD holds the convention, the CVR registration and the bank
            account for French Tech Copenhagen, while the community runs its
            programs autonomously. For any question about this policy or about
            your personal data, contact us at the address above.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            2. The short version
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              We do <strong>not</strong> use cookies, analytics, advertising or
              tracking pixels on this site. See our{" "}
              <Link
                href="/legal/cookies"
                className="font-semibold text-brand-red hover:underline"
              >
                cookie policy
              </Link>
              .
            </li>
            <li>
              We do <strong>not</strong> build profiles, sell data, or make
              automated decisions about you.
            </li>
            <li>
              We only process personal data when you actively send it to us —
              for example by using the contact form or subscribing to our
              newsletter.
            </li>
            <li>
              Some pages embed third-party services (a Luma events calendar)
              that may receive your IP address and set their own cookies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            3. Hosting and server logs
          </h2>
          <p className="mt-3">
            The site is a static website hosted on{" "}
            <strong>GitHub Pages</strong>, a service of GitHub, Inc. When you
            visit, GitHub&apos;s servers automatically process technical data
            needed to deliver the pages to you, such as your IP address,
            browser type, and the time of the request. This is standard for any
            website and is necessary to operate it securely.
          </p>
          <p className="mt-3">
            <strong>Legal basis:</strong> our legitimate interest in providing
            and securing the website (Article 6(1)(f) GDPR). GitHub acts as our
            hosting provider and may process this data outside the EU/EEA under
            appropriate safeguards. See the{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-red hover:underline"
            >
              GitHub Privacy Statement
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            4. Contacting us
          </h2>
          <p className="mt-3">
            The contact form lets you reach us about joining the community,
            partnerships or press. By default it simply opens your own email
            application with a pre-filled message addressed to us — nothing is
            sent or stored until you press send in your own email client.
          </p>
          <p className="mt-3">
            If the form is configured to submit directly (via a third-party
            form provider such as Formspree or Web3Forms), the data you enter —
            your <strong>name</strong>, <strong>email address</strong>, the{" "}
            <strong>reason</strong> for contact and your{" "}
            <strong>message</strong> — is forwarded to us through that provider,
            acting as our processor under a data-processing agreement.
          </p>
          <p className="mt-3">
            In both cases we use this data only to read and reply to your
            message and to handle the request it relates to.
          </p>
          <p className="mt-3">
            <strong>Legal basis:</strong> the steps taken at your request and/or
            our legitimate interest in responding to enquiries (Article 6(1)(b)
            and (f) GDPR).
            <br />
            <strong>Retention:</strong> we keep correspondence only as long as
            needed to deal with your request and any follow-up, then delete it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            5. Newsletter
          </h2>
          <p className="mt-3">
            If a newsletter sign-up form is available and you enter your email
            address, we use it only to send you occasional updates about French
            Tech Copenhagen events and news. The sign-up is handled by an email
            provider (such as Mailchimp or a comparable service) acting as our
            processor.
          </p>
          <p className="mt-3">
            <strong>Legal basis:</strong> your consent (Article 6(1)(a) GDPR).
            You can withdraw it at any time by using the unsubscribe link in any
            email or by writing to us — withdrawing consent does not affect the
            lawfulness of processing before then.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            6. Embedded events calendar (Luma)
          </h2>
          <p className="mt-3">
            Our events page may embed a calendar from <strong>Luma</strong>{" "}
            (Lu.ma). When that page loads, your browser connects directly to
            Luma&apos;s servers to display the calendar, which means Luma can
            receive your IP address and may set its own cookies. If you register
            for an event, that happens on Luma&apos;s own platform under their
            privacy policy, and we receive only the attendee information needed
            to run the event.
          </p>
          <p className="mt-3">
            <strong>Legal basis:</strong> our legitimate interest in showing our
            events programme (Article 6(1)(f) GDPR). For how Luma handles your
            data, see the{" "}
            <a
              href="https://lu.ma/privacy"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-red hover:underline"
            >
              Luma Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            7. Links to other services
          </h2>
          <p className="mt-3">
            The site links to external platforms such as LinkedIn and the event
            pages above. When you follow such a link you leave our site and the
            destination&apos;s own privacy policy applies. We are not
            responsible for the content or data practices of third-party sites.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            8. Event photographs
          </h2>
          <p className="mt-3">
            We may publish photos from our events, which can show identifiable
            people. We rely on our legitimate interest in documenting and
            promoting community activities (Article 6(1)(f) GDPR), balanced
            against your interests. If you appear in a photo and would like it
            removed, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand-red hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and we will take it down.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            9. Your rights
          </h2>
          <p className="mt-3">
            Under the GDPR you have the right to access your personal data, to
            have it corrected or erased, to restrict or object to its
            processing, to data portability, and — where processing is based on
            consent — to withdraw that consent at any time. To exercise any of
            these rights, write to us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand-red hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . We respond free of charge and normally within one month.
          </p>
          <p className="mt-3">
            If you believe we handle your data unlawfully, you may lodge a
            complaint with the Danish Data Protection Agency,{" "}
            <a
              href="https://www.datatilsynet.dk/english"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-red hover:underline"
            >
              Datatilsynet
            </a>
            , or with the supervisory authority in your country of residence.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            10. Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this policy if the site or our practices change — for
            example if we add analytics or a new embedded service. When we do,
            we will revise the &quot;last updated&quot; date above and, where a
            change requires it, ask for your consent first.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
