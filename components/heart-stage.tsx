"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Heart outline in a 200×190 box.
const HEART =
  "M100 180 C40 135 0 100 0 55 C0 25 22 0 52 0 C75 0 92 14 100 32 C108 14 125 0 148 0 C178 0 200 25 200 55 C200 100 160 135 100 180 Z";

// The septum (top to tip) and the valve plane (left to right) split the heart
// into four chambers; they cross at (101.3, 80).
const SEPTUM = "M104 30 L96 180";
const VALVES = "M0 84 L200 76";

const FULL_VIEW = "-6 -6 212 196";

const chambers = [
  {
    id: "research",
    index: "01",
    label: "research",
    region: "M0 0 L104 0 L104 30 L101.3 80 L0 84 Z",
    at: [50, 48],
    view: "-23 -20 150 139",
  },
  {
    id: "builds",
    index: "02",
    label: "builds",
    region: "M104 0 L200 0 L200 76 L101.3 80 L104 30 Z",
    at: [150, 48],
    view: "73 -20 150 139",
  },
  {
    id: "stemseeds",
    index: "03",
    label: "stemseeds",
    region: "M0 84 L101.3 80 L96 180 L96 200 L0 200 Z",
    at: [68, 112],
    view: "-10 45 150 139",
  },
  {
    id: "awards",
    index: "04",
    label: "awards",
    region: "M101.3 80 L200 76 L200 200 L96 200 L96 180 Z",
    at: [138, 112],
    view: "60 45 150 139",
  },
] as const;

const SECTIONS = ["top", ...chambers.map((c) => c.id), "contact"];

/** Tracks which page section sits in the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

/** True below the lg breakpoint, where the hero stacks into one column. */
function useNarrow() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return narrow;
}

/**
 * A large four-chambered heart fixed in the middle of the screen. As you
 * scroll, the view glides to the chamber for the current section. In the
 * hero, where it sits in the open, each chamber is also a link.
 */
export function HeartStage() {
  const active = useActiveSection();
  const narrow = useNarrow();
  const [hovered, setHovered] = useState<string | null>(null);
  const zoomed = chambers.find((c) => c.id === active);
  const inHero = active === "top";
  const lit = hovered ?? zoomed?.id;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center transition-opacity duration-700"
      style={{ opacity: inHero ? 1 : 0.45 }}
    >
      {/* Smaller in the hero so it fits between the text columns, full size once zoomed into a chamber.
          On narrow screens the hero is one column, so the heart drops into the gap below the intro. */}
      <motion.div
        animate={{ scale: inHero ? 0.6 : 1, y: inHero && narrow ? "24vh" : 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="animate-heartbeat [animation-duration:1.6s]">
          <motion.svg
            viewBox={FULL_VIEW}
            animate={{ viewBox: zoomed ? zoomed.view : FULL_VIEW }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="h-[min(62vh,80vw)] w-[min(62vh,80vw)] overflow-visible"
            aria-hidden={!inHero}
          >
            <defs>
              <clipPath id="stage-clip">
                <path d={HEART} />
              </clipPath>
            </defs>

            <g clipPath="url(#stage-clip)">
              {chambers.map((c) => {
                const on = lit === c.id;
                return (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    tabIndex={inHero ? 0 : -1}
                    aria-label={`Go to ${c.label}`}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(c.id)}
                    onBlur={() => setHovered(null)}
                    className={inHero ? "pointer-events-auto cursor-pointer outline-none" : undefined}
                  >
                    <path
                      d={c.region}
                      fill={on ? "rgba(52,245,197,0.28)" : "rgba(255,77,109,0.14)"}
                      className="transition-[fill] duration-500"
                    />
                    <text
                      x={c.at[0]}
                      y={c.at[1]}
                      textAnchor="middle"
                      className="pointer-events-none font-mono transition-[fill] duration-500"
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

            <path d={SEPTUM} stroke="var(--screen)" strokeWidth="3" clipPath="url(#stage-clip)" />
            <path d={VALVES} stroke="var(--screen)" strokeWidth="3" clipPath="url(#stage-clip)" />
            <path
              d={HEART}
              fill="none"
              stroke={lit ? "var(--line)" : "var(--pulse)"}
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              className={`transition-[stroke] duration-500 ${lit ? "glow" : "glow-pulse"}`}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
