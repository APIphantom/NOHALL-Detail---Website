import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-primary" />
          <span className="eyebrow text-primary">{eyebrow}</span>
        </div>
      )}
      <h2 className="display-xl text-[2.25rem] leading-[0.95] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
