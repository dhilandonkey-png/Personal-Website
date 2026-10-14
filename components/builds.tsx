import { ArrowUpRight } from "lucide-react";

import { Bullets } from "@/components/bullets";
import { GitHubIcon } from "@/components/icons";
import { Polaroid } from "@/components/polaroid";
import { SectionHeading } from "@/components/section-heading";
import { StatusTag } from "@/components/status-tag";
import { TremorDemo } from "@/components/tremor-demo";
import { builds, repos } from "@/content/profile";

const tilts = [-4, 3, -2, 5];

export function Builds() {
  return (
    <section id="builds" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="02 / builds"
        title="the bench"
        subtitle="Things I've built, from an app for heart transplant patients to the math behind prediction markets."
      />
      <div className="space-y-20">
        {builds.map((b, i) => {
          const photos = b.photos.filter((p) => p.src);
          return (
            <article key={b.name} className={`grid items-center gap-10 ${photos.length > 0 ? "lg:grid-cols-2" : ""}`}>
              <div className={i % 2 === 1 && photos.length > 0 ? "lg:order-2" : undefined}>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-muted">{b.dates}</p>
                  {b.status && <StatusTag status={b.status} />}
                </div>
                <h3 className="mt-2 text-3xl font-bold text-ink">{b.name}</h3>
                <p className="mt-2 text-lg text-pulse">{b.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.stack.map((s) => (
                    <span key={s} className="rounded border border-line-dim px-2 py-0.5 font-mono text-xs text-line">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-5 max-w-3xl leading-7 text-ink/85">{b.summary}</p>
                <Bullets items={b.bullets} className="mt-5" />
                {b.name.includes("Robotic Arm") && (
                  <div className="mt-6">
                    <TremorDemo />
                  </div>
                )}
              </div>
              {photos.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 py-4">
                  {photos.map((p, j) => (
                    <Polaroid
                      key={p.caption}
                      src={p.src}
                      caption={p.caption}
                      position={p.position}
                      tilt={tilts[(i + j) % tilts.length]}
                    />
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <h3 className="mt-20 mb-6 font-mono text-sm text-pulse">on github</h3>
      <div className="grid gap-6 lg:grid-cols-2">
        {repos.map((r) => (
          <article
            key={r.name}
            className="rounded-xl border border-border bg-panel p-6 transition hover:border-line-dim"
          >
            <a
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-ink hover:text-line"
            >
              <GitHubIcon className="size-4" />
              {r.name}
            </a>
            <p className="mt-3 text-sm leading-6 text-muted">{r.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {r.stack.map((s) => (
                <span key={s} className="rounded border border-line-dim px-2 py-0.5 font-mono text-xs text-line">
                  {s}
                </span>
              ))}
              {"live" in r && (
                <a
                  href={r.live}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-line hover:underline"
                >
                  live <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
