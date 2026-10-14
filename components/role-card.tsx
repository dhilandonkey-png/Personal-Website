import { Bullets } from "@/components/bullets";
import { Polaroid } from "@/components/polaroid";
import { StatusTag } from "@/components/status-tag";
import type { Role } from "@/content/profile";

export function RoleCard({ role }: { role: Role }) {
  const photos = role.photos?.filter((p) => p.src) ?? [];

  return (
    <article className="flex flex-col rounded-xl border border-border bg-panel p-6 transition hover:border-line-dim">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3 className="text-xl font-semibold text-ink">{role.title}</h3>
        {role.status && <StatusTag status={role.status} />}
      </div>
      <p className="mt-1 text-line">{role.org}</p>
      {role.dates && <p className="mt-1 font-mono text-xs text-muted">{role.dates}</p>}
      {role.summary && <p className="mt-4 text-sm leading-6 text-ink/85">{role.summary}</p>}
      <Bullets items={role.bullets} />
      {photos.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {photos.map((p, i) => (
            <Polaroid key={p.caption} src={p.src} caption={p.caption} position={p.position} tilt={i % 2 ? 3 : -3} />
          ))}
        </div>
      )}
    </article>
  );
}
