/**
 * Everything on the site lives here. The resume is the short version; these
 * are the longer write-ups, so they say more than the resume bullets do.
 */

export const profile = {
  name: "Dhilan Avula",
  handle: "dhilan",
  roles: ["Student Researcher", "Software Engineer", "Founder"],
  intro:
    "Hi, I'm Dhilan, a junior at TAMS. I build things that read signals from people, from vitals logged by heart transplant patients to sensor data from Parkinson's tremors. I do research in reinforcement learning, LLM evaluation, biomedical engineering and finance, and I run a nonprofit that ships STEM kits to kids in hospitals.",
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
  { key: "evaluating", value: "open-weight LLMs @ Penn × Adelaide" },
  { key: "growing", value: "organoids @ UNT Yang Lab" },
  { key: "rank", value: "USACO Platinum" },
  { key: "shipped", value: "MyHeartJourney → 50+ patients" },
] as const;

export type Photo = {
  src: string;
  caption: string;
  /** CSS object-position, for portraits that need the crop nudged up. */
  position?: string;
};

export type Status = "ongoing" | "presented" | "accepted" | "completed";

export type Role = {
  title: string;
  org: string;
  dates?: string;
  status?: Status;
  /** Plain-English paragraph: the problem and what I actually do. */
  summary?: string;
  bullets: string[];
  photos?: Photo[];
};

export const research: Role[] = [
  {
    title: "Reinforcement Learning for Scientific Computing",
    org: "University of Texas at Austin · Bajaj Lab",
    dates: "Aug. 2026 – Present",
    status: "ongoing",
    summary:
      "Most reinforcement learning needs huge amounts of trial and error, which is a problem when every trial is an expensive physics simulation. Dr. Chandrajit Bajaj's lab built dfPO (NeurIPS 2025), which reframes RL as a continuous-time control problem so a physics prior is built into the learning itself. I'm reproducing it from the paper's code and benchmarking it against 12 standard RL algorithms, like PPO, SAC and TRPO.",
    bullets: [
      "Getting dfPO and 12 Stable-Baselines3 baselines running in Python",
      "Running benchmarks on 3 scientific tasks: surface modeling, grid-based PDE control and molecular dynamics",
      "Learning the optimal control and Hamiltonian mechanics math the method is built on",
    ],
  },
  {
    title: "LLM Evaluation in Learning Analytics",
    org: "University of Pennsylvania & Adelaide University",
    // TODO: confirm start month.
    dates: "2026 – Present",
    status: "ongoing",
    summary:
      "Coding every minute of a classroom recording for collaborative problem solving by hand doesn't scale, so the team uses open-weight LLMs to score each minute against 19 sub-skills. The question I proposed, and the team adopted: when the model also sees earlier minutes of the transcript, does it label more accurately, or does it just label more? I'm comparing the two setups and checking whether the extra detections are backed by evidence the model actually had.",
    bullets: [
      "Comparing 6 open-weight LLMs across two setups: current minute only, or current minute plus earlier context",
      "Analyzing 16,800+ model outputs in Python and pandas, merging two different export formats into one dataset",
      "Collaborating across U.S. and Australian time zones through a shared GitHub repo",
    ],
  },
  {
    title: "Biomedical Engineering Research",
    org: "University of North Texas · Yang Lab",
    // TODO: dates, and a photo once Dhilan sends one.
    status: "ongoing",
    summary:
      "Organoids are small 3D clusters of cells grown in the lab that behave like a simplified version of a real organ, so researchers can study disease and drug effects without using patients. In Dr. Adam Yang's lab I help prepare organoids for the lab's cardiovascular experiments.",
    bullets: [
      "Help prepare organoids for experiments alongside the lab's graduate researchers",
      "Learning wet-lab technique and how tissue models connect to the cardiovascular modeling I do on the computational side",
    ],
  },
  {
    // TODO: what this project is, the professor, dates.
    title: "Finance Research",
    org: "University of Texas at Arlington",
    status: "ongoing",
    summary: "Quantitative finance research at UT Arlington. A full write-up is coming soon.",
    bullets: [],
  },
];

/** Posters and talks. */
export const presentations: Role[] = [
  {
    title: "Invisible Risks",
    org: "Women's Health Conference, Harvard Medical School",
    dates: "Oct. 1, 2026",
    status: "presented",
    summary:
      "An invited poster reviewing 28 studies on why cardiovascular risk prediction models underserve women, and what that means for the patients those models are used on.",
    bullets: [],
    // TODO: add the Harvard presenting photo.
    photos: [],
  },
  {
    title: "Comparing Cardiovascular Risk Prediction Models",
    org: "MAA MathFest, Boston",
    status: "accepted",
    summary:
      "Accepted to present a poster from the ATLAS Research Scholars program: a quantitative comparison of about 40 cardiovascular disease risk prediction studies.",
    bullets: [],
  },
];

export const experience: Role[] = [
  {
    title: "Coding & Robotics Instructor",
    org: "iCode Providence Village",
    dates: "Feb. 2026 – Present",
    summary:
      "I teach Java and robotics to kids, and I'm part of the team building iCode's new Minecraft-based curriculum, which uses the game to teach Python.",
    bullets: [
      "Taught Java and robotics to 30+ students",
      "Co-developing the Minecraft curriculum and comparing software platforms to run it in class",
    ],
  },
  {
    // TODO: role on the team and season.
    title: "Team Member",
    org: "FIRST Robotics Competition · Mercenary Robotics 6369",
    summary:
      "A competitive high school robotics team that designs, builds and programs a new robot every season.",
    bullets: ["Ranked 6th of 188 teams and qualified for the FIRST World Championship"],
  },
  {
    title: "Credit Analyst Intern",
    org: "First United Bank",
    dates: "May 2026 – July 2026",
    summary:
      "A summer on the lending side of a bank, seeing how a credit decision actually gets made before a loan is approved.",
    bullets: [
      "Analyzed creditworthiness of individuals and businesses using credit bureau data and cash flow projections",
      "Prepared Excel models and credit memos for loan officers on $500K–$2M business loans",
    ],
  },
];

export type Build = {
  name: string;
  status?: Status;
  stack: string[];
  dates: string;
  blurb: string;
  summary: string;
  bullets: string[];
  /** Put files in public/images/ and list them here. */
  photos: Photo[];
};

export const builds: Build[] = [
  {
    name: "MyHeartJourney",
    stack: ["Swift", "SwiftUI"],
    dates: "July 2025 – Aug. 2026",
    blurb: "An iOS app for heart transplant recovery.",
    summary:
      "Recovering from a heart transplant means tracking vitals, symptoms and a long list of medications every single day. I built MyHeartJourney so patients could log all of it in one place and see how they were trending over time. Before adding the medication tools and educational modules, I talked with cardiologists and went through transplant-center patient education guidelines so the content was right. It ran on the App Store for about a year.",
    bullets: [
      "Built in SwiftUI: vitals logging, symptom tracking and trend charts",
      "Medication tools and educational modules shaped by cardiologist feedback",
      "50+ monthly active patients and 1,500+ App Store impressions",
    ],
    photos: [],
  },
  {
    name: "Kalshi Prediction Market Bot",
    status: "ongoing",
    // TODO: stack, dates and a repo link once it's public.
    stack: ["Kelly criterion", "Brier score"],
    dates: "In progress",
    blurb: "Mathematical modeling of prediction markets.",
    summary:
      "Kalshi lets people trade on the outcomes of real events, so every price is the market's probability estimate. I'm building a bot that forms its own probability for each market, sizes positions with the Kelly criterion so a bet is only as big as its edge justifies, and grades its own forecasts with Brier scores to check whether its probabilities are actually calibrated.",
    bullets: [
      "Kelly criterion position sizing, so position size follows the estimated edge",
      "Brier score calibration to measure how trustworthy the bot's probabilities are",
      "Written up as a case study in modeling prediction markets",
    ],
    photos: [],
  },
  {
    name: "AI-Assisted Robotic Arm for Parkinson's Tremors",
    stack: ["Arduino", "C++", "Python"],
    dates: "Nov. 2024 – Mar. 2025",
    blurb: "A glove that reads tremors and an arm that steadies them.",
    summary:
      "Parkinson's affects more than 10 million people, and tremors make everyday things like eating and writing hard. I designed a wearable glove with flex sensors and an MPU6050 accelerometer that tracks motion in X, Y and Z. An Arduino Nano reads the sensors, a model I trained separates intended movement from tremor, and an HC-05 Bluetooth module sends the result to a servo-driven robotic arm that follows the intended motion and compensates for the tremor. I built it on my own at home and kept redesigning it based on how it measured in testing.",
    bullets: [
      "Glove: flex sensors + MPU6050 accelerometer, read by an Arduino Nano",
      "Trained an ML model on the sensor data to tell voluntary movement from tremor",
      "TXSEF Finalist, after qualifying through the Fort Worth Regional Science & Engineering Fair",
    ],
    photos: [
      { src: "/images/robotic-arm/arm-demo.webp", caption: "the arm + glove", position: "50% 40%" },
      { src: "/images/robotic-arm/poster.webp", caption: "at the fair", position: "50% 35%" },
    ],
  },
];

/** Public repos shown under "on github". */
export const repos = [
  {
    name: "Stemseeds-website",
    description:
      "Production site for my nonprofit. Next.js App Router with typed content files, SEO metadata and generated Open Graph images.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/dhilandonkey-png/Stemseeds-website",
    live: "https://www.stemseeds.net",
  },
  {
    name: "Personal-Website",
    description:
      "This site. Every ECG trace on it, including the tremor demo, is generated in code rather than drawn by hand.",
    stack: ["Next.js", "TypeScript", "Motion"],
    href: "https://github.com/dhilandonkey-png/Personal-Website",
  },
] as const;

export const stemseeds = {
  title: "Co-Founder, CEO & Lead Engineer",
  dates: "Sept. 2025 – Present",
  summary:
    "STEMSeeds designs 3-in-1 STEMKits, a paper rocket, a pom-pom catapult and a paper robotic hand, each with step-by-step instructions and a science flyer, and delivers them free to kids in hospitals and underserved communities. Student chapters raise the money themselves through events like volleyball and pickleball tournaments, then pack and hand-deliver every kit. Kits have reached kids across Dallas–Fort Worth and Michigan, and in India, Bangladesh, Sweden and Canada, with manuals translated into Bangla for our Bangladesh chapter.",
  stats: [
    { value: "1,000+", label: "STEM kits delivered" },
    { value: "32", label: "chapters" },
    { value: "6", label: "countries" },
    { value: "$5K", label: "raised" },
  ],
  bullets: [
    "Lead the organization and its chapter leaders, from kit design to hospital partnerships",
    "Built and run stemseeds.net (Next.js, React, TypeScript, Tailwind CSS on Vercel)",
    "Recognized by the mayors of Frisco and Mansfield for our community impact",
  ],
  partners: [
    "Children's Health",
    "Cook Children's",
    "Scottish Rite for Children",
    "Medical City",
    "American Red Cross",
  ],
  photos: [
    { src: "/images/stemseeds/kits.avif", caption: "kits" },
    { src: "/images/stemseeds/manuals.avif", caption: "packing" },
    { src: "/images/stemseeds/delivery.avif", caption: "deliveries", position: "50% 30%" },
  ] as Photo[],
} as const;

// TODO: confirm years for ATLAS, FRC, DECA and BPA.
export const awards: { name: string; year?: string; detail: string }[] = [
  {
    name: "USACO Platinum Division",
    year: "2026",
    detail: "Promoted from Bronze to Platinum, the highest division, in my first contest. C++.",
  },
  {
    name: "Women's Health Conference, Harvard Medical School",
    year: "2026",
    detail: 'Invited to present the "Invisible Risks" poster on cardiovascular risk models and women.',
  },
  {
    name: "MAA MathFest",
    year: "2026",
    detail: "Poster accepted: a quantitative comparison of about 40 cardiovascular risk prediction studies.",
  },
  {
    name: "ATLAS Research Scholars",
    detail: "Selective research program, about an 8% admit rate.",
  },
  {
    name: "TXSEF Finalist",
    year: "2025",
    detail: "Robotic arm for Parkinson's tremors, qualified through FWRSEF.",
  },
  {
    name: "FIRST Robotics, Mercenary Robotics 6369",
    detail: "Ranked 6th of 188 teams and qualified for the World Championship.",
  },
  {
    name: "DECA ICDC",
    detail: "Top 20 internationally.",
  },
  {
    name: "BPA Nationals",
    detail: "4th place for an economics paper on market failure and government intervention.",
  },
  {
    name: "Mayoral Certificates of Recognition",
    detail: "From the mayors of Frisco and Mansfield, for STEMSeeds.",
  },
  {
    name: "HackTAMS, Computer Science Organization",
    year: "2026",
    detail: "Event Committee for an MLH-official hackathon with 200+ participants.",
  },
];

/** "Off the clock" section. */
export const about = {
  courses: ["Calculus I & II", "Linear Algebra", "Discrete Math", "Applied Statistics", "Computer Science I & II (C++)"],
  interests: [
    { title: "Tennis", detail: "My favorite way to get off a screen." },
    { title: "Teaching", detail: "Teaching Java and robotics at iCode keeps my own fundamentals sharp." },
  ],
} as const;

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
  "Arduino",
  "Jupyter",
  "Git",
  "Xcode",
  "Vercel",
] as const;
