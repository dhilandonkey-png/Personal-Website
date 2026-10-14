"use client";

import { motion } from "motion/react";

import { ecgPath } from "@/lib/ecg";

const W = 1000;
const H = 80;
const beat = ecgPath(W, H, 1, H * 0.45);

/** A single heartbeat that draws itself when scrolled into view. */
export function EcgDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6" aria-hidden="true">
      <span className="shrink-0 font-mono text-xs text-line-dim">{label}</span>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="glow h-14 w-full">
        <motion.path
          d={beat}
          fill="none"
          stroke="var(--line)"
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
