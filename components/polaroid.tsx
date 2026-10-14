import Image from "next/image";
import { ImageIcon } from "lucide-react";

/** Photo in a tilted print frame. Empty src renders a labeled placeholder. */
export function Polaroid({
  src,
  caption,
  position,
  tilt = 0,
}: {
  src: string;
  caption: string;
  position?: string;
  tilt?: number;
}) {
  return (
    <figure
      className="w-40 shrink-0 bg-[#f4efe6] p-2 pb-1 shadow-xl transition duration-300 hover:z-10 hover:scale-105 hover:rotate-0 sm:w-48"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative aspect-square overflow-hidden bg-[#1a2228]">
        {src ? (
          <Image
            src={src}
            alt={caption}
            fill
            sizes="200px"
            className="object-cover"
            style={{ objectPosition: position }}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted">
            <ImageIcon className="size-6" aria-hidden="true" />
            <span className="font-mono text-[10px]">photo soon</span>
          </div>
        )}
      </div>
      <figcaption className="py-2 text-center font-mono text-xs text-[#2a2a2a]">■ {caption}</figcaption>
    </figure>
  );
}
