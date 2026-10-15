import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

import { highlights } from "@/content/profile";

export function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <p className="mb-6 font-mono text-sm text-pulse">highlights</p>
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <a
            key={h.title}
            href={h.href}
            className="group relative block aspect-[4/5] overflow-hidden rounded-xl border border-border bg-panel shadow-2xl transition hover:border-line-dim"
          >
            <Image
              src={h.src}
              alt={h.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              style={{ objectPosition: h.position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-screen via-screen/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-mono text-xs text-line">{h.tag}</p>
              <h3 className="mt-1 flex items-center gap-1 text-xl font-bold text-ink">
                {h.title}
                <ArrowDownRight
                  className="size-4 text-line opacity-0 transition group-hover:opacity-100"
                  aria-hidden="true"
                />
              </h3>
              <p className="mt-1 text-sm leading-6 text-ink/80">{h.line}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
