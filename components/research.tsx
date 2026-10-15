import { RoleCard } from "@/components/role-card";
import { SectionHeading } from "@/components/section-heading";
import { experience, presentations, research } from "@/content/profile";

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="01 / research"
        title="the lab"
        subtitle="Reinforcement learning, LLM evaluation, biomedical engineering, banking data and cardiovascular risk models."
      />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {research.map((r) => (
          <RoleCard key={r.title} role={r} />
        ))}
      </div>

      <h3 id="talks" className="mt-16 mb-6 font-mono text-sm text-pulse">posters & talks</h3>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {presentations.map((r) => (
          <RoleCard key={r.title} role={r} />
        ))}
      </div>

      <h3 className="mt-16 mb-6 font-mono text-sm text-pulse">also</h3>
      <div className="grid gap-6 lg:grid-cols-3">
        {experience.map((r) => (
          <RoleCard key={r.title} role={r} />
        ))}
      </div>
    </section>
  );
}
