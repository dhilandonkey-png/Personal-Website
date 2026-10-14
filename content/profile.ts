/**
 * Everything on the site lives here. Wording mirrors the resume, so keep
 * the two in sync when one changes.
 */

export const profile = {
  name: "Dhilan Avula",
  handle: "dhilan",
  roles: ["Student Researcher", "Software Engineer", "Founder"],
  intro:
    "Hi, I'm Dhilan. I build software that reads signals from people, from vitals logged by heart transplant patients to sensor data from Parkinson's tremors. Right now I'm doing reinforcement learning and LLM evaluation research, and running a nonprofit that ships STEM kits to kids in hospitals.",
  location: "Denton, TX",
  email: "dhilanavula@my.unt.edu",
  links: {
    github: "https://github.com/dhilandonkey-png",
    linkedin: "https://www.linkedin.com/in/dhilan-avula-bb9609404/",
    // Drop the exported PDF into public/ with this exact name.
    resume: "/Dhilan_Avula_Resume.pdf",
    stemseeds: "https://www.stemseeds.net",
  },
} as const;

/** The "~ $ vitals" terminal card in the hero. */
export const vitals = [
  { key: "researching", value: "reinforcement learning @ UT Austin" },
  { key: "reproducing", value: "dfPO, a NeurIPS 2025 RL algorithm" },
  { key: "evaluating", value: "6 open-weight LLMs @ Penn × Adelaide" },
  { key: "rank", value: "USACO Platinum" },
  { key: "shipped", value: "MyHeartJourney → 50+ patients" },
] as const;

export type Role = {
  title: string;
  org: string;
  dates?: string;
  advisor?: string;
  bullets: string[];
};

export const research: Role[] = [
  {
    title: "Research Assistant, Reinforcement Learning",
    org: "University of Texas at Austin",
    dates: "Aug. 2026 – Present",
    advisor: "Dr. Chandrajit Bajaj",
    bullets: [
      "Reproducing dfPO, a NeurIPS 2025 RL algorithm, and 12 Stable-Baselines3 baselines in Python",
      "Building benchmark runs across 3 scientific tasks: surface modeling, grid control and molecular dynamics",
      "Studying the optimal control and Hamiltonian math behind dfPO's physics-informed policy updates",
    ],
  },
  {
    title: "Research Assistant, Learning Analytics",
    org: "University of Pennsylvania & Adelaide University",
    // TODO: confirm start month (project notes say Sept. 2026, resume says May 2026).
    dates: "2026 – Present",
    bullets: [
      "Proposed a research question, adopted by the team, testing whether context improves LLM labeling accuracy",
      "Evaluating 6 open-weight LLMs that score classroom transcripts across 19 sub-skills using Python and pandas",
      "Analyzing 16,800+ model outputs across two architectures, served on AWS EC2 GPUs and shared via GitHub",
    ],
  },
  {
    // TODO: title, dates, lab/PI and bullets once Dhilan sends details.
    title: "Biomedical Research, Organoids",
    org: "University of North Texas",
    bullets: [],
  },
  {
    // TODO: title, dates, lab/PI and bullets once Dhilan sends details.
    title: "Finance Research",
    org: "University of Texas at Arlington",
    bullets: [],
  },
];

export const experience: Role[] = [
  {
    title: "Coding & Robotics Instructor",
    org: "iCode Providence Village",
    dates: "Feb. 2026 – Present",
    bullets: [
      "Taught Java and robotics to 30+ students",
      "Co-developing a Minecraft-based curriculum that teaches Python to students",
    ],
  },
  {
    title: "Credit Analyst Intern",
    org: "First United Bank",
    dates: "May 2026 – July 2026",
    bullets: [
      "Analyzed creditworthiness of individuals and businesses using credit bureau data and cash flow projections",
      "Prepared Excel models and credit memos for loan officers on $500K–$2M business loans",
      "Monitored customer accounts for credit risk and flagged potential issues to loan officers",
    ],
  },
];

export type Build = {
  name: string;
  stack: string[];
  dates: string;
  blurb: string;
  bullets: string[];
  /** Photo slots. Put files in public/images/ and set src; empty src shows a placeholder. */
  photos: { src: string; caption: string }[];
};

export const builds: Build[] = [
  {
    name: "MyHeartJourney",
    stack: ["Swift", "SwiftUI"],
    dates: "July 2025 – Aug. 2026",
    blurb: "An iOS app for heart transplant recovery.",
    bullets: [
      "Developed a SwiftUI iOS app for heart transplant recovery with vitals logging, symptom tracking and trend charts",
      "Built medication tools and educational modules after consulting cardiologists on transplant care guidelines",
      "Reached 50+ monthly active patients and 1,500+ App Store impressions",
    ],
    photos: [
      { src: "", caption: "vitals log" },
      { src: "", caption: "trend charts" },
      { src: "", caption: "medications" },
    ],
  },
  {
    name: "AI-Assisted Robotic Arm for Parkinson's Tremors",
    stack: ["Python", "Arduino"],
    dates: "Nov. 2024 – Mar. 2025",
    blurb: "A robotic arm that detects tremors and stabilizes them.",
    bullets: [
      "Independently built a robotic arm prototype that detects and stabilizes Parkinson's tremors",
      "Trained an ML model on accelerometer sensor data, iterating on the design from measured performance",
      "TXSEF Finalist; qualified through the Fort Worth Regional Science & Engineering Fair (FWRSEF)",
    ],
    photos: [
      { src: "", caption: "the arm" },
      { src: "", caption: "TXSEF" },
    ],
  },
];

export const stemseeds = {
  title: "Co-Founder, CEO & Lead Engineer",
  dates: "Sept. 2025 – Present",
  // TODO: stemseeds.net currently says 945+. Make both match.
  stats: [
    { value: "1,000+", label: "STEM kits delivered" },
    { value: "32", label: "chapters" },
    { value: "6", label: "countries" },
    { value: "$5K", label: "raised" },
  ],
  bullets: [
    "Co-founded a nonprofit delivering STEM kits to kids in hospitals and underserved communities",
    "Built stemseeds.net with Next.js, React, TypeScript and Tailwind CSS, deployed on Vercel",
    "Secured partnerships with hospitals, clinics and libraries nationwide",
  ],
  photos: [
    { src: "", caption: "kits" },
    { src: "", caption: "deliveries" },
    { src: "", caption: "the team" },
  ],
} as const;

export const awards = [
  {
    name: "USACO Platinum Division",
    year: "2026",
    detail: "Promoted from Bronze to Platinum, the highest division, in first contest. C++.",
  },
  {
    name: "Women's Health Conference, Harvard Medical School",
    year: "2026",
    detail: "Invited poster on cardiovascular risk prediction models and women's health.",
  },
  {
    name: "TXSEF Finalist",
    year: "2025",
    detail: "Robotic arm for Parkinson's tremors, qualified through FWRSEF.",
  },
  {
    name: "HackTAMS, Computer Science Organization",
    year: "2026",
    detail: "Event Committee for an MLH-official hackathon with 200+ participants.",
  },
] as const;

export const stack = [
  "C++",
  "Java",
  "Python",
  "Swift",
  "SwiftUI",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "pandas",
  "NumPy",
  "Jupyter",
  "Git",
  "Xcode",
  "Vercel",
] as const;
