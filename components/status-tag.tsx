import type { Status } from "@/content/profile";

const styles: Record<Status, string> = {
  ongoing: "border-line-dim text-line",
  presented: "border-pulse/50 text-pulse",
  accepted: "border-[#f5c542]/50 text-[#f5c542]",
  completed: "border-border text-muted",
};

export function StatusTag({ status }: { status: Status }) {
  return (
    <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
}
