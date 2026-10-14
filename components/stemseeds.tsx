import { ArrowUpRight } from "lucide-react";

import { Bullets } from "@/components/bullets";
import { Polaroid } from "@/components/polaroid";
import { SectionHeading } from "@/components/section-heading";
import { profile, stemseeds } from "@/content/profile";

export function Stemseeds() {
  return (
    <section id="stemseeds" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="03 / stemseeds"
        title="STEMSeeds"
        subtitle="A student-led 501(c)(3) that ships hands-on STEM kits to kids in hospitals and underserved communities."
      />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold text-ink">{stemseeds.title}</h3>
            <span className="font-mono text-xs text-muted">{stemseeds.dates}</span>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stemseeds.stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-panel p-4">
                <dt className="font-mono text-xs text-muted">{s.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-line">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 leading-7 text-ink/85">{stemseeds.summary}</p>
          <Bullets items={stemseeds.bullets} className="mt-5" />
          <p className="mt-6 font-mono text-xs text-muted">partners</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {stemseeds.partners.map((p) => (
              <li key={p} className="rounded-full border border-border px-3 py-1 text-xs text-ink">
                {p}
              </li>
            ))}
          </ul>
          <a
            href={profile.links.stemseeds}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1 font-mono text-sm text-line underline-offset-4 hover:underline"
          >
            stemseeds.net <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 py-4">
          {stemseeds.photos.map((p, j) => (
            <Polaroid
              key={p.caption}
              src={p.src}
              caption={p.caption}
              position={p.position}
              tilt={[3, -4, 2][j % 3]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
