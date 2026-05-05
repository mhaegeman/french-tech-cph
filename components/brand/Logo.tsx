import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  variant?: "horizontal" | "mark";
};

/**
 * Brand logo placeholder. Swap the JSX inside this file when the final
 * logo asset arrives — every consumer imports this component, not the asset.
 */
export function Logo({ className, variant = "horizontal" }: Props) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn("h-8 w-8", className)}
      >
        <rect x="0" y="0" width="32" height="32" rx="6" fill="#E0001A" />
        <path
          d="M9 8h14v4H13v4h8v4h-8v6H9z"
          fill="#fff"
        />
      </svg>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display font-semibold tracking-tight text-brand-ink",
        className,
      )}
      aria-label="French Tech Copenhagen"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <rect x="0" y="0" width="32" height="32" rx="6" fill="#E0001A" />
        <path d="M9 8h14v4H13v4h8v4h-8v6H9z" fill="#fff" />
      </svg>
      <span className="text-base leading-none">
        French Tech <span className="text-brand-red">Copenhagen</span>
      </span>
    </span>
  );
}
