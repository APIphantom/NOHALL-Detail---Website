"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Container } from "@/components/ui/container";
import { stats } from "@/data/process";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
      {display}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="grain py-20 lg:py-28">
      <Container>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-7 py-12 lg:px-9 lg:py-16">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-5 font-display text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
