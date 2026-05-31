import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function MembersRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const target = `/${locale}/members/`;

  return (
    <div className="container-page py-32 text-center">
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p className="text-brand-ink/70">
        This page has moved.{" "}
        <Link
          href="/members"
          className="font-semibold text-brand-red hover:underline"
        >
          Go to the Members page →
        </Link>
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
    </div>
  );
}
