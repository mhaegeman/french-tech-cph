import Image from "next/image";
import { cn } from "@/lib/cn";

import logoSrc from "@/public/brand/logo.png";

type Props = {
  className?: string;
  variant?: "horizontal" | "mark";
};

export function Logo({ className, variant = "horizontal" }: Props) {
  return (
    <Image
      src={logoSrc}
      alt="La French Tech Copenhagen"
      priority={variant === "horizontal"}
      placeholder="blur"
      className={cn(
        "h-12 w-auto select-none",
        variant === "mark" && "h-9 w-auto",
        className,
      )}
    />
  );
}
