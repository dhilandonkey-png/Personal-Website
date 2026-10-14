export function Bullets({ items, className = "mt-4" }: { items: readonly string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={`${className} space-y-2 text-sm leading-6 text-muted`}>
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="mt-2.5 h-px w-3 shrink-0 bg-pulse" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
