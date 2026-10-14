import { FileText, Heart, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/content/profile";

const sections = [
  { label: "Research", href: "#research" },
  { label: "Builds", href: "#builds" },
  { label: "STEMSeeds", href: "#stemseeds" },
  { label: "Awards", href: "#awards" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const iconLink =
  "rounded-md p-2 text-muted transition hover:bg-panel-2 hover:text-line focus-visible:outline-2 focus-visible:outline-line";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-screen/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-line">
          <Heart className="animate-heartbeat size-4 fill-pulse text-pulse" aria-hidden="true" />
          <span className="font-semibold">~/{profile.handle}</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {sections.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="transition hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className={iconLink} aria-label="GitHub">
            <GitHubIcon className="size-5" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={iconLink} aria-label="LinkedIn">
            <LinkedInIcon className="size-5" />
          </a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className={iconLink} aria-label="Resume (PDF)">
            <FileText className="size-5" />
          </a>
          <a href={`mailto:${profile.email}`} className={iconLink} aria-label="Email">
            <Mail className="size-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
