import { SectionHeading } from "@/components/section-heading";
import { awards, stack } from "@/content/profile";

export function Awards() {
  return (
    <section id="awards" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04 / awards" title="the readings" subtitle="Competitions, talks and events." />
        <ol className="divide-y divide-border rounded-xl border border-border bg-panel">
          {awards.map((a) => (
            <li key={a.name} className="grid gap-1 p-5 sm:grid-cols-[5rem_1fr] sm:gap-6">
              <span className="font-mono text-sm text-pulse">{a.year}</span>
              <div>
                <p className="font-semibold text-ink">{a.name}</p>
                <p className="mt-1 text-sm text-muted">{a.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 overflow-hidden border-y border-border bg-panel/60 py-4" aria-label="Tech stack">
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
