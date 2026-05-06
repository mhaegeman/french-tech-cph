import Image from "next/image";
import { cn } from "@/lib/cn";

import logoSrc from "@/public/brand/logo.png";

type Props = {
  className?: string;
};

/**
 * Single source of truth for the brand lockup. Replace `logo.png` (or this
 * import) to swap the asset everywhere — Header, Footer, future OG images.
 *
 * Intentionally exposes no "mark" / "horizontal" variant: we only have the
 * full lockup. A real icon-only variant should land as a separate asset
 * (e.g. `logo-mark.png`) and a new component or prop wired to it, not a
 * scaled-down crop of the lockup.
 */
export function Logo({ className }: Props) {
  return (
    <Image
      src={logoSrc}
      alt="La French Tech Copenhagen"
      priority
      placeholder="blur"
      className={cn("h-16 w-auto select-none", className)}
    />
  );
}
