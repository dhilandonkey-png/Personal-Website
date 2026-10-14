"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { profile } from "@/content/profile";
import { ecgPath, flatlinePath } from "@/lib/ecg";

const W = 1000;
const H = 120;
const flat = flatlinePath(W, H, 3);
const beat = ecgPath(W, H, 3);

/** Footer: the trace is flat until you reach for the email link. */
export function Contact() {
  const [alive, setAlive] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pt-20 pb-10 text-center sm:px-6">
      <p className="font-mono text-sm text-pulse">06 / contact</p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-line sm:text-5xl">say hi</h2>
      <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
        Always happy to talk research, building things, or STEMSeeds.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="glow mt-10 h-24 w-full" aria-hidden="true">
        <motion.path
          d={flat}
          animate={{ d: alive ? beat : flat }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          fill="none"
          stroke={alive ? "var(--line)" : "var(--muted)"}
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <a
        href={`mailto:${profile.email}`}
        onMouseEnter={() => setAlive(true)}
        onMouseLeave={() => setAlive(false)}
        onFocus={() => setAlive(true)}
        onBlur={() => setAlive(false)}
        className="mt-6 inline-block rounded-lg border border-line px-6 py-3 font-mono text-line transition hover:bg-line hover:text-screen"
      >
        {profile.email}
      </a>

      <p className="mt-16 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · built with Next.js
      </p>
    </section>
  );
}
