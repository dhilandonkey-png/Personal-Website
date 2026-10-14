export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10 lg:max-w-[min(30rem,38vw)]">
      <p className="font-mono text-sm text-pulse">{index}</p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-line sm:text-5xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted">{subtitle}</p>
    </div>
  );
}
