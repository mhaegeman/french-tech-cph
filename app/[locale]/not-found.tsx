import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-brand-ink">
        Page not found
      </h1>
      <p className="mt-3 text-brand-ink/70">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex">
        Back to home
      </Link>
    </div>
  );
}
