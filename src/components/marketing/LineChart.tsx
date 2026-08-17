"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import type { SeriesPoint } from "@/data/marketing";
import { cn } from "@/lib/utils";

const W = 900;
const H = 340;
const PAD = { top: 28, right: 24, bottom: 42, left: 48 };

export function LineChart({
  data,
  valueFormatter = (v: number) => String(v),
  className,
  markerFrom,
}: {
  data: SeriesPoint[];
  valueFormatter?: (v: number) => string;
  className?: string;
  /** index a partir do qual a curva muda de fase (linha vertical) */
  markerFrom?: number;
}) {
  const [active, setActive] = useState<number | null>(null);

  const { points, path, area, max, min } = useMemo(() => {
    const values = data.map((d) => d.value);
    const max = Math.max(...values) * 1.1;
    const min = 0;
    const iw = W - PAD.left - PAD.right;
    const ih = H - PAD.top - PAD.bottom;
    const points = data.map((d, i) => ({
      ...d,
      x: PAD.left + (i / Math.max(1, data.length - 1)) * iw,
      y: PAD.top + ih - ((d.value - min) / (max - min)) * ih,
    }));
    const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
    const area = `${path} L${points[points.length - 1].x},${PAD.top + ih} L${points[0].x},${PAD.top + ih} Z`;
    return { points, path, area, max, min };
  }, [data]);

  const ticks = [0, 0.25, 0.5, 0.75, 1];
  const activePoint = active !== null ? points[active] : null;

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Gráfico de evolução (dados ilustrativos)"
        onMouseLeave={() => setActive(null)}
      >
        <defs>
          <linearGradient id="lc-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {ticks.map((t) => {
          const y = PAD.top + (H - PAD.top - PAD.bottom) * (1 - t);
          return (
            <g key={t}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y}
                y2={y}
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x={PAD.left - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-[var(--subtle)] text-[11px]"
              >
                {valueFormatter(Math.round(min + (max - min) * t))}
              </text>
            </g>
          );
        })}

        {markerFrom !== undefined && points[markerFrom] && (
          <g>
            <line
              x1={points[markerFrom].x}
              x2={points[markerFrom].x}
              y1={PAD.top}
              y2={H - PAD.bottom}
              stroke="var(--primary)"
              strokeDasharray="4 6"
              strokeOpacity="0.6"
            />
          </g>
        )}

        <motion.path
          d={area}
          fill="url(#lc-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {points.map((p, i) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r={active === i ? 6 : 3.5}
              fill="var(--background)"
              stroke="var(--primary)"
              strokeWidth="2"
              className="transition-all duration-200"
            />
            <text
              x={p.x}
              y={H - PAD.bottom + 22}
              textAnchor="middle"
              className="fill-[var(--subtle)] text-[11px] uppercase"
            >
              {p.label}
            </text>
            <rect
              x={p.x - (W - PAD.left - PAD.right) / (2 * points.length)}
              y={PAD.top}
              width={(W - PAD.left - PAD.right) / points.length}
              height={H - PAD.top - PAD.bottom}
              fill="transparent"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className="cursor-crosshair focus:outline-none"
            />
          </g>
        ))}
      </svg>

      <div className="mt-2 min-h-[62px] rounded-sm border border-border bg-elevated px-4 py-3">
        {activePoint ? (
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-[0.68rem] uppercase tracking-[0.24em] text-primary">
              {activePoint.phase}
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              {activePoint.label} · {valueFormatter(activePoint.value)}
            </span>
          </div>
        ) : (
          <span className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-subtle">
            Passe o cursor sobre a linha para inspecionar cada ponto
          </span>
        )}
      </div>
    </div>
  );
}
