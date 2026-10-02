// Everything on the site comes from this file. Edit text and links here.
// Any link left as "" is hidden automatically.
//
// Logos: each company/org has a `domain`; its logo loads from that website automatically.
// To use your own image instead, drop it in /public/logos and set `logo: "/logos/name.png"`.

export const site = {
  name: "Deepa Venkat",
  title: "Deepa Venkat",
  tagline: "Materials Science & Engineering and EECS at UC Berkeley",
  url: "https://website-dvenkat425.vercel.app", // TODO: replace with your real Vercel URL
  location: "Berkeley, CA",

  // Put a square photo in /public (e.g. headshot.jpg) and set this to "/headshot.jpg".
  photo: "",

  email: "dvenkat@berkeley.edu",
  links: {
    github: "https://github.com/dvenkat425",
    linkedin: "https://www.linkedin.com/in/deepa-venkat-224289212",
    substack: "", // add your Substack URL when it's live
    resume: "", // put resume.pdf in /public and set this to "/resume.pdf"
  },

  about: [
    "I'm a senior at UC Berkeley studying Materials Science & Engineering and EECS, with a minor in Data Science.",
    "My background spans engineering and research, hardware and software, product management, and entrepreneurship, from materials testing and simulation to shipping AI products for enterprise customers.",
    "The thread through all of it is building for customers. Human-centered design is how I work: understand the people I'm building for, then build the thing that actually solves their problem.",
  ],

  education: {
    school: "University of California, Berkeley",
    domain: "berkeley.edu",
    logo: "",
    degrees: "B.S. Materials Science & Engineering, B.S. EECS",
    minor: "Minor in Data Science",
    when: "May 2027",
  },

  campus: [
    {
      name: "Berkeley Business Society",
      domain: "berkeleybusinesssociety.com",
      logo: "",
      url: "http://www.berkeleybusinesssociety.com/",
    },
    {
      name: "Entrepreneurs at Berkeley",
      domain: "entrepreneursatberkeley.com",
      logo: "",
      url: "https://www.entrepreneursatberkeley.com/",
    },
  ],

  // Newest first. Leave "when" as "" to hide the date.
  internships: [
    {
      org: "Microsoft",
      domain: "microsoft.com",
      logo: "",
      role: "Product Manager Intern, Data Security AI",
      when: "Summer 2026",
      points: [
        "Customer-facing PM on the customer experience for Microsoft's data security and AI products.",
        "Built an AI-generated asset pipeline with Codex that automates 7–10 deployment assets per scenario, from deployment scripts and security policies to field enablement playbook agents.",
        "Turned 100+ customer signals from interviews into a 7-category blocker taxonomy, replacing six-month deployments with standardized 1, 3, and 5-day deployment kits.",
        "Partnered with engineering on Power BI dashboards tracking adoption health, and validated the framework across three security scenarios, cutting customer time to deploy by about 80%.",
      ],
    },
    {
      org: "Arris Composites",
      domain: "arriscomposites.com",
      logo: "",
      role: "Software Engineering Intern",
      when: "", // TODO: add dates
      points: [
        "Built a Python–Abaqus interface for a generative AI design system at a carbon fiber composites manufacturer, letting engineers run 3–4 product iterations per hour.",
        "Evaluated Gemini and OpenAI models on accuracy and latency; the model I selected cut FEA simulation time 6x across 30+ schematics.",
        "Processed 500+ material datasets to train models on 1,000+ designs, reaching 93% output accuracy.",
      ],
    },
    {
      org: "Mercor",
      domain: "mercor.com",
      logo: "",
      role: "AI Evaluation Data Analyst",
      when: "", // TODO: add dates
      points: [
        "Analyzed 350+ AI model evaluations with SQL and identified six recurring failure patterns in rubric design.",
        "Built feedback loops between evaluators and rubric designers, cutting scoring disagreement by about 20%.",
      ],
    },
    {
      org: "FUJIFILM",
      domain: "fujifilm.com",
      logo: "",
      role: "Product Quality Engineering Intern, Materials",
      when: "Summer 2025",
      points: [
        "Worked on the materials team on product quality and built supplier compliance dashboards.", // TODO: expand if you want
      ],
    },
  ],

  alsoWorkedWith: {
    text: "I've also done project work with Micron Technology and Adobe.",
    orgs: [
      { name: "Micron", domain: "micron.com", logo: "" },
      { name: "Adobe", domain: "adobe.com", logo: "" },
    ],
  },

  projects: [
    {
      name: "IntegrationForge",
      summary: "Describe an integration in plain English and get a runnable webhook handler back.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      repo: "https://github.com/dvenkat425/integrationforge",
      live: "https://integrationforge.vercel.app/",
    },
    {
      name: "DataChat",
      summary: "Upload a CSV and ask questions about it in plain language. Claude plans the query, a typed engine runs it.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      repo: "https://github.com/dvenkat425/datachat--1-",
      live: "https://datachat-1.vercel.app/",
    },
    {
      name: "TicketPilot",
      summary: "AI triage for support tickets: categorize, prioritize, and route each one to the right team.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      repo: "https://github.com/dvenkat425/ticketpilot--1-",
      live: "https://ticketpilot-1.vercel.app/",
    },
  ],

  writing: {
    blurb:
      "I'm AI curious. On my Substack I try AI tools hands-on and write about what each one is actually good for.",
    posts: [] as { title: string; url: string; date: string }[],
  },
};
