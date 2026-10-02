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

/* ---------- Panels ---------- */

function About() {
  return (
    <div className="panel-inner">
      {site.status && (
        <p className="status">
          <span className="dot" aria-hidden="true" />
          {site.status}
        </p>
      )}
      <div className="prose">
        {site.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <dl className="facts">
        {site.facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Projects() {
  return (
    <div className="panel-inner">
      <p className="panel-lede">
        Small tools built the way forward deployed work goes: start from a messy customer problem and ship the thing that solves it.
      </p>
      <ul className="projects">
        {site.projects.map((p) => {
          const primary = p.live || p.repo;
          return (
            <li key={p.name} className="project">
              <div className="project-head">
                <h3>
                  {primary ? (
                    <Ext href={primary} className="project-link">
                      {p.name}
                      <ArrowIcon />
                    </Ext>
                  ) : (
                    p.name
                  )}
                </h3>
                <div className="project-actions">
                  {p.live && <Ext href={p.live}>Live demo</Ext>}
                  {p.repo && <Ext href={p.repo}>Code</Ext>}
                </div>
              </div>
              <p className="project-summary">{p.summary}</p>
              <ul className="chips" aria-label="Built with">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Internships() {
  return (
    <div className="panel-inner">
      <ol className="roles">
        {site.internships.map((r) => (
          <li key={r.org} className="role">
            <div className="role-head">
              <h3>{r.org}</h3>
              {r.when && <span className="when">{r.when}</span>}
            </div>
            <p className="role-title">{r.role}</p>
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
    </div>
  );
}

function Writing() {
  const { posts, blurb } = site.writing;
  return (
    <div className="panel-inner">
      <p className="panel-lede">{blurb}</p>
      {posts.length > 0 && (
        <ul className="posts">
          {posts.map((p) => (
            <li key={p.url}>
              <Ext href={p.url}>{p.title}</Ext>
              <span className="when">{p.date}</span>
            </li>
          ))}
        </ul>
      )}
      {site.links.substack && (
        <Ext href={site.links.substack} className="button">
          Read on Substack
        </Ext>
      )}
    </div>
  );
}

function Contact() {
  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    site.links.linkedin && { label: "LinkedIn", value: site.links.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: site.links.linkedin },
    site.links.github && { label: "GitHub", value: site.links.github.replace(/^https?:\/\/(www\.)?/, ""), href: site.links.github },
    site.links.substack && { label: "Substack", value: site.links.substack.replace(/^https?:\/\/(www\.)?/, ""), href: site.links.substack },
    site.links.resume && { label: "Resume", value: "Download PDF", href: site.links.resume },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <div className="panel-inner">
      <p className="panel-lede">The fastest way to reach me is email. I read everything and reply quickly.</p>
      <ul className="contact">
        {rows.map((r) => (
          <li key={r.label}>
            <Ext href={r.href}>
              <span className="contact-label">{r.label}</span>
              <span className="contact-value">{r.value}</span>
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

  // Sync with the URL hash so tabs can be linked directly (e.g. /#projects).
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
    // Keep the active tab visible when the bar scrolls on small screens.
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
          {site.links.github && (
            <Ext href={site.links.github} className="icon-link">
              <GitHubIcon />
              <span className="sr">GitHub</span>
            </Ext>
          )}
          {site.links.linkedin && (
            <Ext href={site.links.linkedin} className="icon-link">
              <LinkedInIcon />
              <span className="sr">LinkedIn</span>
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
