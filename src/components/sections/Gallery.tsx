"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { gallery, galleryFilters } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<string>("todos");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "todos" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const current = index !== null ? items[index] : null;

  return (
    <section id="galeria" className="grain border-y border-border bg-surface py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Resultados reais"
          subtitle="Registros de veículos tratados no estúdio, sem retoque de acabamento."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setIndex(null);
              }}
              className={cn(
                "rounded-sm border px-4 py-2.5 font-display text-[0.66rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((g, i) => (
            <motion.button
              key={g.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-lg border border-border text-left"
            >
              <img
                src={g.src}
                alt={`${g.title} — ${g.description}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-display text-sm uppercase tracking-[0.16em]">
                  {g.title}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {g.description}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-4 backdrop-blur-xl"
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setIndex(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((v) => ((v ?? 0) - 1 + items.length) % items.length);
              }}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próxima"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((v) => ((v ?? 0) + 1) % items.length);
              }}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={`${current.title} — ${current.description}`}
                className="max-h-[72vh] w-full rounded-lg border border-border object-contain"
              />
              <figcaption className="mt-4 text-center">
                <p className="font-display text-sm uppercase tracking-[0.18em]">
                  {current.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{current.description}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
