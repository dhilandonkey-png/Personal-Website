"use client";

import { Heart } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

/** Corner readout whose heart rate climbs as you scroll down the page. */
export function BpmReadout() {
  const { scrollYProgress } = useScroll();
  const [bpm, setBpm] = useState(64);

  useMotionValueEvent(scrollYProgress, "change", (p) => setBpm(Math.round(64 + p * 58)));

  return (
    <div
      className="fixed bottom-4 left-4 z-30 hidden items-center gap-2 rounded-md border border-border bg-panel/90 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur sm:flex"
      aria-hidden="true"
    >
      <Heart className="animate-heartbeat size-3.5 fill-pulse text-pulse" />
      <span className="tabular-nums text-ink">{bpm}</span> bpm
    </div>
  );
}
