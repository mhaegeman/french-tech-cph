import Image from "next/image";
import { cn } from "@/lib/cn";

import logoLightSrc from "@/public/brand/logo-light.png";
import logoDarkSrc from "@/public/brand/logo-dark.png";

type Props = {
  className?: string;
};

/**
 * Single source of truth for the brand lockup. Two assets ship — the
 * dark-text variant for light mode and the light-text variant for dark
 * mode — swapped via `prefers-color-scheme`. Tailwind's default `media`
 * dark-mode strategy means no toggle UI or `<html class="dark">` is
 * required.
 *
 * Callers that pass `className` are expected to set their own height (e.g.
 * `h-72`); we skip the default so they don't have to fight class-ordering
 * to override it.
 */
export function Logo({ className }: Props) {
  const sizing = cn("w-auto select-none", className ?? "h-16");
  return (
    <>
      <Image
        src={logoLightSrc}
        alt="La French Tech Copenhagen"
        priority
        placeholder="blur"
        className={cn(sizing, "block dark:hidden")}
      />
      <Image
        src={logoDarkSrc}
        alt=""
        aria-hidden="true"
        priority
        placeholder="blur"
        className={cn(sizing, "hidden dark:block")}
      />
    </>
  );
}
