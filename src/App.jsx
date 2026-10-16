import { profile, metrics, experience, expertise, projects, education } from "./content.js";

const NAV = [
  ["experience", "Experience"],
  ["expertise", "Expertise"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

function Ext() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="ext">
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-name">{profile.name}</a>
          <nav aria-label="Sections">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="hero" id="top">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="cta">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Get in touch</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Ext /></a>
            {profile.resume && <a className="btn" href={profile.resume} download>Download résumé</a>}
          </div>
        </section>

        <ul className="metrics" aria-label="Career highlights">
          {metrics.map((m) => (
            <li key={m.label}>
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </li>
          ))}
        </ul>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company + job.period} className="job">
                <div className="job-meta">
                  <span className="job-period">{job.period}</span>
                  <span className="job-company">{job.company}</span>
                </div>
                <div className="job-detail">
                  <h3>{job.role}</h3>
                  <ul>{job.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="expertise" title="Expertise">
          <div className="expertise">
            {expertise.map((g) => (
              <div key={g.area}>
                <h3>{g.area}</h3>
                <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="project">
                <h3>
                  {p.link
                    ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} <Ext /></a>
                    : p.title}
                </h3>
                <p>{p.text}</p>
                <p className="project-tags">{p.tags.join(" · ")}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <div key={e.degree} className="edu">
              <h3>{e.degree}</h3>
              <p>{e.school} <span className="muted">· {e.period}</span></p>
            </div>
          ))}
        </Section>

        <section id="contact" className="contact" aria-labelledby="contact-h">
          <h2 id="contact-h">Let's connect</h2>
          <p>Open to senior roles and conversations in cloud architecture, infrastructure security and resilience.</p>
          <dl className="contact-list">
            <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">kamal-vasvani <Ext /></a></dd></div>
            <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noopener noreferrer">kamalvasvani1989-coder <Ext /></a></dd></div>
          </dl>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap"><p>© {new Date().getFullYear()} {profile.name}</p></div>
      </footer>
    </>
  );
}
