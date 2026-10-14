import type { Role } from "@/content/profile";

export function RoleCard({ role }: { role: Role }) {
  return (
    <article className="rounded-xl border border-border bg-panel p-6 transition hover:border-line-dim">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold text-ink">{role.title}</h3>
        <span className="font-mono text-xs text-muted">{role.dates}</span>
      </div>
      <p className="mt-1 text-line">{role.org}</p>
      {role.advisor && <p className="mt-1 font-mono text-xs text-muted">advised by {role.advisor}</p>}
      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
        {role.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2.5 h-px w-3 shrink-0 bg-pulse" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
