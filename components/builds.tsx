import { Polaroid } from "@/components/polaroid";
import { SectionHeading } from "@/components/section-heading";
import { TremorDemo } from "@/components/tremor-demo";
import { builds } from "@/content/profile";

const tilts = [-4, 3, -2, 5];

export function Builds() {
  return (
    <section id="builds" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="02 / builds"
        title="the bench"
        subtitle="Things I've built that read signals from people and respond to them."
      />
      <div className="space-y-20">
        {builds.map((b, i) => (
          <article key={b.name} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="font-mono text-xs text-muted">{b.dates}</p>
              <h3 className="mt-2 text-3xl font-bold text-ink">{b.name}</h3>
              <p className="mt-2 text-lg text-pulse">{b.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {b.stack.map((s) => (
                  <span key={s} className="rounded border border-line-dim px-2 py-0.5 font-mono text-xs text-line">
                    {s}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
                {b.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-pulse" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {b.name.includes("Robotic Arm") && (
                <div className="mt-6">
                  <TremorDemo />
                </div>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 py-4">
              {b.photos.map((p, j) => (
                <Polaroid key={p.caption} src={p.src} caption={p.caption} tilt={tilts[(i + j) % tilts.length]} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
