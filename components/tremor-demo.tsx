"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { tremorPath } from "@/lib/ecg";

const W = 600;
const H = 120;
const shaky = tremorPath(W, H, false);
const steady = tremorPath(W, H, true);

/** Shows what the robotic arm does: a tremor trace that smooths out on demand. */
export function TremorDemo() {
  const [stable, setStable] = useState(false);

  return (
    <div
      className="rounded-xl border border-border bg-screen p-4"
      onMouseEnter={() => setStable(true)}
      onMouseLeave={() => setStable(false)}
    >
      <div className="flex items-center justify-between font-mono text-xs">
        <span className={stable ? "text-line" : "text-pulse"}>
          {stable ? "● stabilized" : "● tremor detected"}
        </span>
        <button
          type="button"
          onClick={() => setStable((s) => !s)}
          className="rounded border border-border px-2 py-1 text-muted transition hover:border-line hover:text-line"
          aria-pressed={stable}
        >
          {stable ? "release" : "stabilize"}
        </button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className={`mt-3 h-24 w-full ${stable ? "glow" : "glow-pulse"}`} aria-hidden="true">
        <motion.path
          d={shaky}
          animate={{ d: stable ? steady : shaky }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          fill="none"
          stroke={stable ? "var(--line)" : "var(--pulse)"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
