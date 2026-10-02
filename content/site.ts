// Everything on the site comes from this file. Edit text and links here.
// Any link left as "" is hidden automatically.

export const site = {
  name: "Deepa Venkat",
  title: "Deepa Venkat",
  tagline: "Materials Science & Engineering at UC Berkeley. I build AI tools for the people who have to use them.",
  url: "https://deepavenkat.vercel.app", // TODO: replace with your real Vercel URL or custom domain
  location: "Berkeley, CA",

  // Put a square photo in /public (e.g. headshot.jpg) and set this to "/headshot.jpg".
  // Leave "" to show your initials instead.
  photo: "",

  email: "dvenkat@berkeley.edu",
  links: {
    github: "https://github.com/dvenkat425",
    linkedin: "", // TODO: e.g. "https://www.linkedin.com/in/your-handle"
    substack: "", // TODO: e.g. "https://yourname.substack.com"
    resume: "", // TODO: put resume.pdf in /public and set this to "/resume.pdf"
  },

  // Shown on the About tab. Set to "" to hide.
  status: "Looking for new-grad forward deployed engineering and product roles for 2027.",

  about: [
    "I'm a senior at UC Berkeley studying Materials Science & Engineering, with a minor in Data Science. I build software for the people who have to use it, and I like working where product, customers, and code meet.",
    "Materials science taught me to understand the structure underneath before deciding what to build on top of it. I bring that to product work: figure out what someone actually needs, then ship the thing that does it.",
    "Human-centered design is the part I care about most. Outside of work I make art and write fiction, which turns out to be the same muscle: paying attention to a person and building something for them.",
  ],

  facts: [
    { label: "Studying", value: "B.S. Materials Science & Engineering, UC Berkeley" },
    { label: "Minor", value: "Data Science" },
    { label: "Graduating", value: "2027" }, // TODO: confirm term
    { label: "Leadership", value: "Leads PM recruiting for Berkeley Business Society" },
  ],

  // Newest first. "when" is free text; leave "" if you don't want dates shown.
  internships: [
    {
      org: "Microsoft",
      role: "Product Manager Intern, Customer Experience",
      when: "Summer 2026",
      points: [
        "Customer-facing PM on the customer experience for Microsoft's SaaS cybersecurity suite.",
        // TODO: add 1-2 lines on what you shipped or changed
      ],
    },
    {
      org: "Arris Composites",
      role: "Software Engineering Intern",
      when: "", // TODO: add dates
      points: [
        // TODO: 1-2 lines on what you built
      ] as string[],
    },
  ],

  projects: [
    {
      name: "IntegrationForge",
      summary: "Describe an integration in plain English and get runnable webhook code back.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      repo: "https://github.com/dvenkat425/integrationforge", // TODO: confirm repo name
      live: "", // TODO: Vercel URL
    },
    {
      name: "TicketPilot",
      summary: "AI triage for support tickets: categorize, prioritize, and route them to the right person.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      repo: "https://github.com/dvenkat425/ticketpilot", // TODO: confirm repo name
      live: "", // TODO: Vercel URL
    },
    {
      name: "DataChat",
      summary: "Upload a CSV and ask questions about it in plain language.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      repo: "https://github.com/dvenkat425/datachat", // TODO: confirm repo name
      live: "", // TODO: Vercel URL
    },
  ],

  writing: {
    blurb:
      "I'm AI curious. On my Substack I try AI tools hands-on and write about what each one is actually good for.",
    // Add posts as { title, url, date }, newest first.
    posts: [] as { title: string; url: string; date: string }[],
  },
};
