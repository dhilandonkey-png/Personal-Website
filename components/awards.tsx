import { SectionHeading } from "@/components/section-heading";
import { awards, stack } from "@/content/profile";
import { left, right, sideGrid } from "@/lib/layout";

export function Awards() {
  return (
    <section id="awards" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading index="04 / awards" title="the record" subtitle="Competitions, talks and events." />
        <ol className={sideGrid}>
          {awards.map((a, i) => (
            <li
              key={a.name}
              className={`${i % 2 === 0 ? left : right} rounded-xl border border-border bg-panel/95 p-5`}
            >
              <span className="font-mono text-sm text-pulse">{a.year}</span>
              <p className="mt-1 font-semibold text-ink">{a.name}</p>
              <p className="mt-1 text-sm text-muted">{a.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-border bg-panel py-4" aria-label="Tech stack">
        <ul className="animate-marquee flex w-max gap-10 font-mono text-sm text-line">
          {[...stack, ...stack].map((s, i) => (
            <li key={i} aria-hidden={i >= stack.length || undefined} className="whitespace-nowrap">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
