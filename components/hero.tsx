import { ArrowDown } from "lucide-react";

import { profile, vitals } from "@/content/profile";
import { ecgPath } from "@/lib/ecg";
import { left, right, sideGrid } from "@/lib/layout";

const TRACE_W = 1200;
const TRACE_H = 200;
// Drawn twice side by side so the sweep animation loops seamlessly.
const trace = ecgPath(TRACE_W, TRACE_H, 4);

/**
 * The middle column stays empty so the fixed heart (HeartStage) shows through
 * and its chambers can be clicked; only the text columns catch the pointer.
 */
export function Hero() {
  return (
    <section id="top" className="pointer-events-none relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-14 opacity-60 [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]"
      >
        <div className="animate-sweep flex w-[200%]">
          {[0, 1].map((i) => (
            <svg
              key={i}
              viewBox={`0 0 ${TRACE_W} ${TRACE_H}`}
              preserveAspectRatio="none"
              className="glow h-24 w-1/2 sm:h-32"
            >
              <path d={trace} fill="none" stroke="var(--line)" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      </div>

      <div
        className={`${sideGrid} relative mx-auto min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 pt-16 pb-44 sm:px-6`}
      >
        <div className={`${left} pointer-events-auto`}>
          <p className="font-mono text-sm text-line">{profile.location}</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-ink xl:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-pulse">{profile.roles.join(" | ")}</p>
          <p className="mt-6 font-mono text-sm leading-7 text-muted">{profile.intro}</p>
        </div>

        {/* On small screens the heart sits behind everything, so leave room for it. */}
        <div className="h-[min(62vh,80vw)] lg:hidden" aria-hidden="true" />

        <div
          className={`${right} pointer-events-auto rounded-xl border border-border bg-panel/90 p-5 font-mono text-sm shadow-2xl backdrop-blur`}
        >
          <div className="mb-4 flex items-center gap-2 text-xs text-muted">
            <span className="size-2.5 rounded-full bg-pulse" />
            <span className="size-2.5 rounded-full bg-[#f5c542]" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="ml-2">monitor</span>
          </div>
          <p className="text-line">
            ~ $ vitals<span className="animate-blink">_</span>
          </p>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
            {vitals.map((v) => (
              <div key={v.key} className="contents">
                <dt className="text-pulse">{v.key}</dt>
                <dd className="text-ink">{v.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-muted">tap a chamber of the heart to jump in →</p>
        </div>
      </div>

      <a
        href="#research"
        aria-label="Scroll to research"
        className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 text-line transition hover:translate-y-1"
      >
        <ArrowDown className="size-6" />
      </a>
    </section>
  );
}
