import { ArrowUpRight } from "lucide-react";

import { Polaroid } from "@/components/polaroid";
import { SectionHeading } from "@/components/section-heading";
import { profile, stemseeds } from "@/content/profile";
import { left, right, sectionShell, sideGrid } from "@/lib/layout";

export function Stemseeds() {
  const photos = stemseeds.photos.filter((p) => p.src);

  const stats = (
    <dl className="grid grid-cols-2 gap-3">
      {stemseeds.stats.map((s) => (
        <div key={s.label} className="rounded-lg border border-border bg-screen p-4">
          <dt className="font-mono text-xs text-muted">{s.label}</dt>
          <dd className="mt-1 text-2xl font-bold text-line">{s.value}</dd>
        </div>
      ))}
    </dl>
  );

  return (
    <section id="stemseeds" className={sectionShell}>
      <SectionHeading
        index="03 / stemseeds"
        title="the seeds"
        subtitle="A student-led 501(c)(3) that ships hands-on STEM kits to kids in hospitals and underserved communities."
      />
      <div className={`${sideGrid} items-center`}>
        <div className={`${left} rounded-xl border border-border bg-panel/95 p-6`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold text-ink">{stemseeds.title}</h3>
            <span className="font-mono text-xs text-muted">{stemseeds.dates}</span>
          </div>
          {photos.length > 0 && <div className="mt-6">{stats}</div>}
          <ul className="mt-6 space-y-2 text-sm leading-6 text-muted">
            {stemseeds.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2.5 h-px w-3 shrink-0 bg-pulse" aria-hidden="true" />
                <span>{b}</span>
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
        {photos.length > 0 ? (
          <div className={`${right} flex flex-wrap justify-center gap-4 py-4`}>
            {photos.map((p, j) => (
              <Polaroid key={p.caption} src={p.src} caption={p.caption} tilt={[3, -4, 2][j % 3]} />
            ))}
          </div>
        ) : (
          <div className={`${right} rounded-xl border border-border bg-panel/95 p-6`}>{stats}</div>
        )}
      </div>
    </section>
  );
}
