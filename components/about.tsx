import { SectionHeading } from "@/components/section-heading";
import { about } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="05 / about" title="off the clock" subtitle="What I'm studying and what I do when I'm not at a keyboard." />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-panel p-6 lg:col-span-1">
          <p className="font-mono text-sm text-line">~ $ currently learning</p>
          <p className="mt-1 text-xs text-muted">TAMS @ University of North Texas</p>
          <ul className="mt-4 space-y-2 font-mono text-sm text-ink">
            {about.courses.map((c) => (
              <li key={c}>
                <span className="text-pulse">›</span> {c}
              </li>
            ))}
          </ul>
        </div>
        {about.interests.map((x) => (
          <div key={x.title} className="rounded-xl border border-border bg-panel p-6">
            <h3 className="text-xl font-semibold text-ink">{x.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{x.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
