import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-sm px-7 py-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--primary)]",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-primary",
};

export function ActionButton({
  children,
  variant = "primary",
  className,
  withArrow = true,
  ...props
}: ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
}) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </a>
  );
}

export function SubmitButton({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & { children: ReactNode }) {
  return (
    <button className={cn(base, variants.primary, className)} {...props}>
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
    </button>
  );
}
