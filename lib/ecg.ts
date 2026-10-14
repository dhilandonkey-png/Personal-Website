/**
 * Path builders for the heartbeat traces. Every builder emits the same
 * number of points for the same input, so two paths can be morphed into
 * each other (flatline → heartbeat, tremor → stabilized).
 */

type Point = [x: number, y: number];

// One heartbeat over x ∈ [0, 1]. y is the deflection, -1 is the top of the R spike.
const BEAT: Point[] = [
  [0, 0],
  [0.1, 0],
  [0.13, -0.06],
  [0.16, -0.1],
  [0.19, -0.06],
  [0.22, 0],
  [0.32, 0],
  [0.345, 0.1],
  [0.37, -1],
  [0.395, 0.28],
  [0.42, 0],
  [0.52, 0],
  [0.57, -0.14],
  [0.62, -0.2],
  [0.67, -0.14],
  [0.72, 0],
  [1, 0],
];

function toPath(points: Point[]): string {
  return points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");
}

function beatPoints(
  width: number,
  height: number,
  beats: number,
  amplitude: number,
): Point[] {
  const mid = height / 2;
  const beatWidth = width / beats;
  const points: Point[] = [];
  for (let b = 0; b < beats; b++) {
    for (let i = b === 0 ? 0 : 1; i < BEAT.length; i++) {
      const [x, y] = BEAT[i];
      points.push([b * beatWidth + x * beatWidth, mid + y * amplitude]);
    }
  }
  return points;
}

export function ecgPath(width: number, height: number, beats: number, amplitude = height * 0.42) {
  return toPath(beatPoints(width, height, beats, amplitude));
}

/** Same shape as ecgPath, flattened to the baseline. */
export function flatlinePath(width: number, height: number, beats: number) {
  return toPath(beatPoints(width, height, beats, 0));
}

// Deterministic noise so server and client render the same path.
function noise(i: number) {
  const s = Math.sin(i * 12.9898) * 43758.5453;
  return s - Math.floor(s);
}

/** A shaky tremor trace, or the same trace smoothed when `stabilized`. */
export function tremorPath(width: number, height: number, stabilized: boolean, samples = 120) {
  const mid = height / 2;
  const points: Point[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const drift = Math.sin(t * Math.PI * 2) * height * 0.12;
    const shake = stabilized
      ? 0
      : (Math.sin(t * Math.PI * 34) * 0.7 + (noise(i) - 0.5) * 0.9) * height * 0.32;
    points.push([t * width, mid + drift + shake]);
  }
  return toPath(points);
}
