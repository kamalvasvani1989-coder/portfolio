import { profile, now, skills, projects, highlights } from "./content.js";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="ext">
      <path d="M4 10L10 4M5 4h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="nav">
        <a href="#top" className="mark" aria-label="Kamal Vasvani, back to top">KV</a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <h1>
            <span>{first}</span>
            <span>{rest.join(" ")}</span>
          </h1>
          <div className="hero-foot">
            <p className="role">{profile.role}<br /><span className="muted">{profile.location}</span></p>
            <p className="intro">{profile.intro}</p>
          </div>
        </section>

        <aside className="now" aria-label="Currently building">
          <div>
            <p className="now-label">Currently building</p>
            <h2>{now.title}</h2>
            <p>{now.text}</p>
          </div>
          <a className="btn" href={now.link} target="_blank" rel="noopener noreferrer">
            {now.linkLabel} <Arrow />
          </a>
        </aside>

        <section className="section about" aria-labelledby="about-h">
          <h2 id="about-h" className="section-h">About</h2>
          <div className="about-body">
            {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="highlights">
              {highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-h">
          <h2 id="work-h" className="section-h">Work</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} className="project">
                <div className="project-head">
                  <h3>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} <Arrow /></a>
                    ) : p.title}
                  </h3>
                  <span className="kind">{p.kind}</span>
                </div>
                <p>{p.text}</p>
                <ul className="tags" aria-label="Technologies">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h" className="section-h">Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.area} className="skill-group">
                <h3>{s.area}</h3>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-h">
          <h2 id="contact-h">Let's talk security.</h2>
          <p>Open to conversations about cloud security, compliance programs, and interesting infrastructure problems.</p>
          <div className="contact-links">
            <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn btn-quiet" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
            <a className="btn btn-quiet" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}
