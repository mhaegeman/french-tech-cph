type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: Props) {
  return (
    <article className="container-page py-20">
      <header className="max-w-3xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 text-lg text-brand-ink/70">{intro}</p>
        )}
      </header>
      {children && <div className="mt-12">{children}</div>}
    </article>
  );
}
