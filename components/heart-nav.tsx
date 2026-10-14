"use client";

import { useState } from "react";

// Heart outline in a 200×190 box.
const HEART =
  "M100 180 C40 135 0 100 0 55 C0 25 22 0 52 0 C75 0 92 14 100 32 C108 14 125 0 148 0 C178 0 200 25 200 55 C200 100 160 135 100 180 Z";

// The septum (top to tip) and the valve plane (left to right) split the heart
// into four chambers; they cross at (101.3, 80).
const SEPTUM = "M104 30 L96 180";
const VALVES = "M0 84 L200 76";

const chambers = [
  {
    id: "research",
    index: "01",
    label: "research",
    caption: "UT Austin · Penn × Adelaide · UNT · UT Arlington",
    region: "M0 0 L104 0 L104 30 L101.3 80 L0 84 Z",
    at: [50, 48],
  },
  {
    id: "builds",
    index: "02",
    label: "builds",
    caption: "MyHeartJourney · robotic arm for Parkinson's tremors",
    region: "M104 0 L200 0 L200 76 L101.3 80 L104 30 Z",
    at: [150, 48],
  },
  {
    id: "stemseeds",
    index: "03",
    label: "stemseeds",
    caption: "1,000+ kits · 32 chapters · 6 countries",
    region: "M0 84 L101.3 80 L96 180 L96 200 L0 200 Z",
    at: [68, 112],
  },
  {
    id: "awards",
    index: "04",
    label: "awards",
    caption: "USACO Platinum · Harvard Medical School · TXSEF",
    region: "M101.3 80 L200 76 L200 200 L96 200 L96 180 Z",
    at: [138, 112],
  },
] as const;

/** A four-chambered heart; each chamber links to one section of the page. */
export function HeartNav() {
  const [active, setActive] = useState<string | null>(null);
  const current = chambers.find((c) => c.id === active);

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="-6 -6 212 196"
        className="animate-heartbeat w-full max-w-[22rem] overflow-visible [animation-duration:1.6s]"
        role="navigation"
        aria-label="Sections"
      >
        <defs>
          <clipPath id="heart-clip">
            <path d={HEART} />
          </clipPath>
        </defs>

        <g clipPath="url(#heart-clip)">
          {chambers.map((c) => {
            const on = active === c.id;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                aria-label={`${c.label}: ${c.caption}`}
                onMouseEnter={() => setActive(c.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(c.id)}
                onBlur={() => setActive(null)}
                className="cursor-pointer outline-none"
              >
                <path
                  d={c.region}
                  fill={on ? "rgba(52,245,197,0.28)" : "rgba(255,77,109,0.16)"}
                  className="transition-[fill] duration-300"
                />
                <text
                  x={c.at[0]}
                  y={c.at[1]}
                  textAnchor="middle"
                  className="pointer-events-none font-mono transition-[fill] duration-300"
                  fill={on ? "var(--line)" : "var(--ink)"}
                  fontSize="10"
                >
                  <tspan x={c.at[0]} dy="0" fontSize="7" fill="var(--pulse)">
                    {c.index}
                  </tspan>
                  <tspan x={c.at[0]} dy="12">
                    {c.label}
                  </tspan>
                </text>
              </a>
            );
          })}
        </g>

        <path d={SEPTUM} stroke="var(--screen)" strokeWidth="3" clipPath="url(#heart-clip)" className="pointer-events-none" />
        <path d={VALVES} stroke="var(--screen)" strokeWidth="3" clipPath="url(#heart-clip)" className="pointer-events-none" />
        <path
          d={HEART}
          fill="none"
          stroke={current ? "var(--line)" : "var(--pulse)"}
          strokeWidth="2.5"
          className={`pointer-events-none transition-[stroke] duration-300 ${current ? "glow" : "glow-pulse"}`}
        />
      </svg>

      <p className="mt-6 h-5 text-center font-mono text-xs text-muted" aria-live="polite">
        {current ? current.caption : "tap a chamber"}
      </p>
    </div>
  );
}
