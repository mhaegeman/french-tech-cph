import Image from "next/image";
import { cn } from "@/lib/cn";

import logoSrc from "@/public/brand/logo-light.png";

type Props = {
  className?: string;
};

/**
 * Single source of truth for the brand lockup. We ship a `logo-dark.png`
 * companion in `public/brand/` for when the site grows a real dark theme;
 * until then we render the dark-text variant only — swapping on
 * `prefers-color-scheme` alone would put a light-text logo on the
 * still-white body for OS-dark-mode users.
 *
 * Callers that pass `className` are expected to set their own height (e.g.
 * `h-72`); we skip the default so they don't have to fight class-ordering
 * to override it.
 */
export function Logo({ className }: Props) {
  return (
    <Image
      src={logoSrc}
      alt="La French Tech Copenhagen"
      priority
      placeholder="blur"
      className={cn("w-auto select-none", className ?? "h-16")}
    />
  );
}
