"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const TABS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

/* ---------- Icons ---------- */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith("http");
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

/* ---------- Logo ---------- */

// Loads the organization's logo from its website. Falls back to initials if it can't load.
function Logo({ name, domain, src, size = "md" }: { name: string; domain: string; src?: string; size?: "sm" | "md" }) {
  const [failed, setFailed] = useState(false);
  const url = src || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  const initials = name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter((w) => w && !["of", "at", "and", "the"].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <span className={`logo logo-${size}`} aria-hidden="true">
      {failed ? (
        <span className="logo-fallback">{initials}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" loading="lazy" onError={() => setFailed(true)} />
      )}
    </span>
  );
}

/* ---------- Panels ---------- */

function About() {
  const e = site.education;
  return (
    <div className="stack">
      <div className="prose">
        {site.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="group" aria-labelledby="edu-h">
        <h2 id="edu-h" className="group-title">Education</h2>
        <div className="card row">
          <Logo name={e.school} domain={e.domain} src={e.logo} />
          <div className="row-main">
            <p className="row-title">{e.school}</p>
            <p className="row-sub">{e.degrees}</p>
            <p className="row-sub">{e.minor}</p>
          </div>
          <span className="when">{e.when}</span>
        </div>
      </section>

      <section className="group" aria-labelledby="campus-h">
        <h2 id="campus-h" className="group-title">On campus</h2>
        <div className="orgs">
          {site.campus.map((c) => (
            <Ext key={c.name} href={c.url} className="card row org">
              <Logo name={c.name} domain={c.domain} src={c.logo} />
              <span className="row-title">{c.name}</span>
              <ArrowIcon />
            </Ext>
          ))}
        </div>
      </section>
    </div>
  );
}

function Projects() {
  return (
    <div className="stack">
      <p className="lede">Things I&rsquo;ve built recently. Each one is live, so try them out.</p>
      <ul className="list">
        {site.projects.map((p) => (
          <li key={p.name} className="card project">
            <div className="project-top">
              <h3>{p.name}</h3>
              <div className="actions">
                {p.live && (
                  <Ext href={p.live} className="btn btn-primary">
                    Live demo
                  </Ext>
                )}
                {p.repo && (
                  <Ext href={p.repo} className="btn">
                    <GitHubIcon />
                    Code
                  </Ext>
                )}
              </div>
            </div>
            <p className="project-summary">{p.summary}</p>
            <ul className="chips" aria-label="Built with">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Internships() {
  const also = site.alsoWorkedWith;
  return (
    <div className="stack">
      <ol className="list">
        {site.internships.map((r) => (
          <li key={r.org} className="card role">
            <div className="role-head">
              <Logo name={r.org} domain={r.domain} src={r.logo} />
              <div className="row-main">
                <h3 className="row-title">{r.org}</h3>
                <p className="row-sub">{r.role}</p>
              </div>
              {r.when && <span className="when">{r.when}</span>}
            </div>
            {r.points.length > 0 && (
              <ul className="points">
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      <div className="also">
        <div className="also-logos">
          {also.orgs.map((o) => (
            <Logo key={o.name} name={o.name} domain={o.domain} src={o.logo} size="sm" />
          ))}
        </div>
        <p>{also.text}</p>
      </div>
    </div>
  );
}

function Writing() {
  const { posts, blurb } = site.writing;
  return (
    <div className="stack">
      <div className="card writing">
        <div className="writing-head">
          <span className="icon-tile" aria-hidden="true">
            <PenIcon />
          </span>
          <div className="row-main">
            <h3 className="row-title">Substack</h3>
            <p className="row-sub">AI tools, tested hands-on</p>
          </div>
          {site.links.substack ? (
            <Ext href={site.links.substack} className="btn btn-primary">
              Read
            </Ext>
          ) : (
            <span className="badge">Link coming soon</span>
          )}
        </div>
        <p className="writing-blurb">{blurb}</p>
      </div>

      {posts.length > 0 && (
        <ul className="list">
          {posts.map((p) => (
            <li key={p.url}>
              <Ext href={p.url} className="card row post">
                <span className="row-title">{p.title}</span>
                <span className="when">{p.date}</span>
              </Ext>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Contact() {
  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: <MailIcon /> },
    site.links.linkedin && { label: "LinkedIn", value: "Deepa Venkat", href: site.links.linkedin, icon: <LinkedInIcon /> },
    site.links.github && { label: "GitHub", value: site.links.github.replace(/^https?:\/\/(www\.)?/, ""), href: site.links.github, icon: <GitHubIcon /> },
    site.links.substack && { label: "Substack", value: site.links.substack.replace(/^https?:\/\/(www\.)?/, ""), href: site.links.substack, icon: <PenIcon /> },
  ].filter(Boolean) as { label: string; value: string; href: string; icon: React.ReactElement }[];

  return (
    <div className="stack">
      <p className="lede">Email is the fastest way to reach me. I&rsquo;m also happy to connect on LinkedIn.</p>
      <ul className="list">
        {rows.map((r) => (
          <li key={r.label}>
            <Ext href={r.href} className="card row contact-row">
              <span className="icon-tile" aria-hidden="true">
                {r.icon}
              </span>
              <span className="row-main">
                <span className="row-title">{r.label}</span>
                <span className="row-sub">{r.value}</span>
              </span>
              <ArrowIcon />
            </Ext>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PANELS: Record<TabId, () => React.ReactElement> = {
  about: About,
  projects: Projects,
  internships: Internships,
  writing: Writing,
  contact: Contact,
};

/* ---------- Shell ---------- */

export default function TabbedSite() {
  const [active, setActive] = useState<TabId>("about");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  // Sync with the URL hash so each tab has its own link (e.g. /#projects).
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1) as TabId;
      if (TABS.some((t) => t.id === h)) setActive(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const measure = useCallback(() => {
    const el = tabRefs.current[active];
    const list = listRef.current;
    if (!el || !list) return;
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    const { scrollLeft, clientWidth } = list;
    if (el.offsetLeft < scrollLeft || el.offsetLeft + el.offsetWidth > scrollLeft + clientWidth) {
      list.scrollTo({ left: el.offsetLeft - 12, behavior: "smooth" });
    }
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const select = (id: TabId, focus = false) => {
    setActive(id);
    history.replaceState(null, "", id === "about" ? window.location.pathname : `#${id}`);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = TABS.findIndex((t) => t.id === active);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next >= 0) {
      e.preventDefault();
      select(TABS[next].id, true);
    }
  };

  const Panel = PANELS[active];
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="shell">
      <header className="top">
        <div className="identity">
          {site.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="avatar" src={site.photo} alt="" width={64} height={64} />
          ) : (
            <span className="avatar avatar-initials" aria-hidden="true">
              {initials}
            </span>
          )}
          <div>
            <h1>{site.name}</h1>
            <p className="tagline">{site.tagline}</p>
          </div>
        </div>
        <nav className="socials" aria-label="Profiles">
          {site.links.linkedin && (
            <Ext href={site.links.linkedin} className="icon-link">
              <LinkedInIcon />
              <span className="sr">LinkedIn</span>
            </Ext>
          )}
          {site.links.github && (
            <Ext href={site.links.github} className="icon-link">
              <GitHubIcon />
              <span className="sr">GitHub</span>
            </Ext>
          )}
          <a href={`mailto:${site.email}`} className="icon-link">
            <MailIcon />
            <span className="sr">Email</span>
          </a>
        </nav>
      </header>

      <div className="tabs" role="tablist" aria-label="Sections" ref={listRef} onKeyDown={onKeyDown}>
        {indicator && (
          <span
            className="indicator"
            aria-hidden="true"
            style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
          />
        )}
        {TABS.map((t) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[t.id] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className="tab"
            onClick={() => select(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <main
        key={active}
        className="panel"
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
      >
        <Panel />
      </main>

      <footer className="foot">
        <span>{site.location}</span>
        <span>&copy; {new Date().getFullYear()} {site.name}</span>
      </footer>
    </div>
  );
}
