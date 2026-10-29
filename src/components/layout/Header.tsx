"use client";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    if (!onHome) return;
    const sections = navLinks
      .map((link) => document.getElementById(link.hash))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <Link to="/" hash="inicio" className="flex min-w-0 items-center gap-2.5">
          <span className="h-4 w-[3px] shrink-0 bg-primary" />
          <span className="truncate font-display text-lg font-light tracking-[0.24em]">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {navLinks.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              aria-current={onHome && activeSection === l.hash ? "location" : undefined}
              className={cn(
                "link-underline font-display text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-foreground",
                onHome && activeSection === l.hash ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/marketing"
            aria-current={!onHome ? "page" : undefined}
            className={cn(
              "link-underline font-display text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-foreground",
              !onHome ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Marketing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contato"
            className="hidden rounded-sm border border-primary bg-primary px-6 py-3 font-display text-[0.68rem] font-light uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-primary sm:inline-block"
          >
            Agendar serviço
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((l) => (
                <Link
                  key={l.hash}
                  to="/"
                  hash={l.hash}
                  aria-current={onHome && activeSection === l.hash ? "location" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-border/60 py-4 font-display text-sm uppercase tracking-[0.18em]",
                    onHome && activeSection === l.hash ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/marketing"
                aria-current={!onHome ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-sm uppercase tracking-[0.18em] text-muted-foreground"
              >
                Marketing
              </Link>
              <Link
                to="/"
                hash="contato"
                onClick={() => setOpen(false)}
                className="mt-5 rounded-sm border border-primary bg-primary px-6 py-4 text-center font-display text-xs font-light uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-primary"
              >
                Agendar serviço
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
