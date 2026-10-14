import { RoleCard } from "@/components/role-card";
import { SectionHeading } from "@/components/section-heading";
import { experience, research } from "@/content/profile";
import { left, right, sectionShell, sideGrid } from "@/lib/layout";

export function Research() {
  return (
    <section id="research" className={sectionShell}>
      <SectionHeading
        index="01 / research"
        title="the lab"
        subtitle="Reinforcement learning at UT Austin, LLM evaluation with Penn and Adelaide, organoids at UNT, and finance at UT Arlington."
      />
      <div className={sideGrid}>
        {research.map((r, i) => (
          <div key={r.title} className={i % 2 === 0 ? left : right}>
            <RoleCard role={r} />
          </div>
        ))}
      </div>

      <h3 className="mt-16 mb-6 font-mono text-sm text-pulse">also</h3>
      <div className={sideGrid}>
        {experience.map((r, i) => (
          <div key={r.title} className={i % 2 === 0 ? left : right}>
            <RoleCard role={r} />
          </div>
        ))}
      </div>
    </section>
  );
}
