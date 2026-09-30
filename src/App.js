import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Art images (a-image)
import art1 from './images/a-image1.png';
import art2 from './images/a-image2.png';
import art3 from './images/a-image3.png';
import art4 from './images/a-image4.png';

// Photography images (image)
import photo1 from './images/image1.png';
import photo2 from './images/image2.png';
import photo3 from './images/image3.png';
import photo4 from './images/image4.png';
import photo5 from './images/image5.png';

/* ── Content ─────────────────────────────────────────────── */

const experience = [
  {
    company: 'Capital One',
    via: 'via Mindlance',
    role: 'Product Manager · Product Owner, Account Servicing',
    location: 'McLean, VA',
    dates: 'Jun 2026 – Aug 2026',
    tags: ['Product Strategy', 'Migration', 'Stakeholder Mgmt', 'Agile'],
    points: [
      'Product Owner for the Account Servicing domain and Product Manager for two engineering teams (10 engineers each), overseeing Cases (Complaints, Claims, Fraud Investigations), document association, customer activity/agent notes, and beneficiary/trust entity management.',
      'Led product strategy and delivery for the DFS-to-Capital One migration, coordinating upstream (DFS), internal engineering, and downstream product teams on requirements, sequencing, and decisions; partnered with Legal on fraud, claims, and trust entities.',
      'Directed data mapping across account servicing systems for migration wave planning, flagging issues before execution to reduce downstream risk.',
      'Executed the August migration wave, moving 819,236 accounts from DFS to Capital One and driving remediation of identified issues.',
    ],
  },
  {
    company: 'Dell Technologies',
    role: 'Software Engineer I · Software Engineering Intern',
    location: 'Bangalore, India',
    dates: 'Jan 2022 – Aug 2025',
    tags: ['Java', 'REST APIs', 'Kubernetes', 'Redis', 'Grafana', 'Python'],
    points: [
      'Designed and built full-stack REST APIs and backend services supporting 150M+ connected devices across the full SDLC, working closely with engineering, architecture, and product teams.',
      'Led infrastructure migration to Kubernetes, improving deployment throughput by 20% and cutting deployment latency 35% across microservices.',
      'Built and maintained relational and NoSQL data layers supporting 10M+ daily transactions with zero downtime; presented technical decisions to engineering leadership.',
      'Standardized Agile/Scrum workflows in Confluence (onboarding time −30% across 3 teams), built dashboards tracking 15+ service health metrics (incident detection −25%), and wrote Python automation saving ~4 hours per release.',
    ],
  },
];

const featuredProjects = [
  {
    title: 'Debatrium',
    kicker: 'Multi-Agent AI System',
    stack: ['Python', 'AWS', 'GPT-4o', 'NVIDIA NIM', 'SQS', 'Redis'],
    description:
      'A 9-agent system orchestrating GPT-4o and NVIDIA NIM models to run structured, multi-perspective debate, with an iterative feedback and quality-control loop refining agent outputs. Distributed backend on AWS: EC2 Auto Scaling Groups, 12 SQS FIFO queues with dead-letter handling, and ElastiCache Redis (Multi-AZ, TLS), secured via API Gateway and Firebase Auth.',
    github: 'https://github.com/AlekyaKowta/multi-agent-debate-model',
  },
  {
    title: 'Carbon-Aware Freight Routing',
    kicker: 'Data Pipeline · Routing',
    stack: ['Python', 'Pandas', 'PyTorch'],
    description:
      'An end-to-end data pipeline and routing application over a ~960-node road network enriched with real-world emissions and elevation data. Benchmarked multiple algorithmic approaches, improving routing efficiency while reducing estimated carbon output.',
    github: 'https://github.com/JSciarillo/Multi-Objective-Reinforcement-Learning-for-Carbon-Aware-Global-Logistics',
  },
  {
    title: 'Trustworthy AI Hackathon',
    kicker: '1st Place Winner',
    stack: ['Python', 'Pandas', 'Jupyter'],
    description:
      'An open-source analytical tool translating complex datasets into clear summary statistics and visualizations for non-technical stakeholders, built under hackathon time constraints.',
    github: 'https://github.com/AlekyaKowta/TAI-Hackathon-Riverhouse-Problem5',
    award: true,
  },
  {
    title: 'Resilient Food',
    kicker: 'GeorgeHacks · Spot Prize, Best Use of Solana',
    stack: ['Python', 'Google Gemini', 'Solana', 'GeoPandas', 'Twilio', 'OpenStreetMap'],
    description:
      'A disaster-resilient food coordination platform connecting local vendors, farmers, and NGOs when infrastructure fails. Real-time SMS alerts fire on USGS/weather triggers, AI market-pulse summaries flag price shocks, digital ration tickets keep economic activity local, and donor transparency is enforced via on-chain Solana receipts.',
    github: 'https://github.com/AlekyaKowta/GeorgeHacks_Food4All',
    extraLinks: [{ label: 'Devpost', href: 'https://devpost.com/software/resilientfood' }],
    award: true,
  },
  {
    title: 'Adaptive Traffic Model Scaling',
    kicker: 'Computer Vision · ML',
    stack: ['Python', 'YOLOv8', 'TrafficCAM'],
    description:
      'Model scaling analysis for adaptive traffic monitoring, comparing YOLOv8 model sizes on a TrafficCAM subset. Involved extensive cleaning, validation, and preprocessing of large image datasets to train and evaluate detection models for real-world conditions.',
    github: 'https://github.com/AlekyaKowta/adaptive-traffic-model-scaling',
  },
];

const moreProjects = [
  {
    title: 'Security Research & Tooling',
    note: 'Published in IEEE; co-authored Springer chapter, Cyber Intelligence and Information Retrieval',
    stack: 'Python · Network Security · IoT',
    links: [],
  },
  {
    title: 'AI-Generated Image Verification',
    note: 'Human vs. AI image classification with on-chain voting',
    stack: 'Python · Selenium · Ethereum · Solidity',
    links: [{ label: 'GitHub', href: 'https://github.com/jayparmar16/VoteAI-Image-Decentralized-Platform' }],
  },
  {
    title: 'Smart Walking System',
    note: 'Patent application (2022), assistive navigation',
    stack: 'IoT · Embedded Systems',
    links: [],
  },
];

const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'C#', 'JavaScript', 'SQL', 'C++'] },
  { group: 'Full-Stack & Web', items: ['React', 'Spring Boot', 'ASP.NET Core MVC', '.NET', 'REST APIs', 'Microservices', 'HTML', 'CSS'] },
  { group: 'Product & Agile', items: ['Product Strategy', 'Roadmap Planning', 'Stakeholder Management', 'Agile/Scrum', 'Sprint Planning', 'Backlog (Jira)', 'Requirements Gathering', 'TDD'] },
  { group: 'Cloud & DevOps', items: ['AWS (EC2, Lambda, S3)', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Linux'] },
  { group: 'Data & Tools', items: ['Oracle', 'MySQL', 'NoSQL', 'Redis', 'Kafka', 'PowerBI', 'Grafana', 'Confluence'] },
  { group: 'AI / ML', items: ['OpenAI GPT-4o API', 'Prompt Engineering', 'PyTorch', 'Pandas'] },
];

const education = [
  {
    school: 'The George Washington University',
    degree: 'M.S. Computer Science',
    detail: 'GPA 3.9 / 4.0 · Data Structures & Algorithms, ML & AI, Distributed Systems',
    location: 'Washington, DC',
    dates: 'May 2027',
  },
  {
    school: 'Vellore Institute of Technology',
    degree: 'B.Tech Information Technology',
    detail: 'GPA 9.04 / 10',
    location: 'Tamil Nadu, India',
    dates: 'May 2022',
  },
];

const gallery = {
  art: [art1, art2, art3, art4],
  photo: [photo1, photo2, photo3, photo4, photo5],
};

const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

/* ── Hooks & helpers ─────────────────────────────────────── */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0f1115' : '#f4efe4');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // storage unavailable — theme still applies for this visit
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

/* ── Components ──────────────────────────────────────────── */

// Seigaiha (青海波) wave scales. Rows are 10 units apart and alternate
// offset; the pattern tile repeats every 40 × 20 units.
function SeigaihaPattern({ id, scale = 1 }) {
  const rows = [0, 10, 20, 30, 40];
  const circles = [];
  rows.forEach((y, r) => {
    const xs = r % 2 === 0 ? [-40, 0, 40, 80] : [-20, 20, 60];
    xs.forEach((x) => circles.push([x, y]));
  });
  return (
    <pattern id={id} width="40" height="20" patternUnits="userSpaceOnUse" patternTransform={`scale(${scale})`}>
      {circles.map(([x, y]) => (
        <g key={`${x}-${y}`} className="scale">
          {[20, 15.5, 11, 6.5, 2.5].map((r) => (
            <circle key={r} cx={x} cy={y} r={r} />
          ))}
        </g>
      ))}
    </pattern>
  );
}

function WaveRail() {
  const railRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        // Period of the pattern is 40px (tile scaled ×2), so modulo keeps it seamless
        const offset = (window.scrollY * 0.25) % 40;
        if (railRef.current) railRef.current.style.transform = `translateY(${-offset}px)`;
        frame = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="wave-rail" aria-hidden="true">
      <svg ref={railRef} className="wave-rail-svg">
        <defs>
          <SeigaihaPattern id="seigaiha-rail" scale={2} />
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha-rail)" />
      </svg>
      <span className="wave-rail-label">波 · nami</span>
    </aside>
  );
}

// Stylised great-wave crest for the hero background
function WaveCrest() {
  return (
    <svg className="wave-crest" viewBox="0 0 600 400" aria-hidden="true">
      <path
        className="crest-fill"
        d="M0 400 L0 300 C60 280 110 240 150 190 C190 140 200 80 260 50 C330 15 420 30 460 90 C490 135 470 190 425 200 C395 207 372 188 380 162 C388 140 415 142 420 158 C432 130 410 100 375 100 C320 100 290 150 290 210 C290 290 360 340 450 340 C510 340 560 320 600 300 L600 400 Z"
      />
      <path
        className="crest-line"
        d="M20 320 C90 300 140 250 180 200 C220 150 230 100 280 75 C340 45 410 60 440 105"
      />
      <path
        className="crest-line"
        d="M40 345 C120 330 180 290 225 240 C260 200 270 150 310 125 C350 100 395 110 410 135"
      />
      <path
        className="crest-line"
        d="M320 250 C340 300 390 320 450 318 C510 316 555 298 600 280"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} className="crest-foam" cx={250 + i * 38} cy={48 + Math.abs(i - 2.5) * 12} r={4 - Math.abs(i - 2.5) * 0.6} />
      ))}
    </svg>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line key={a} x1="12" y1="2.5" x2="12" y2="5" transform={`rotate(${a} 12 12)`} />
          ))}
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
        </svg>
      )}
    </button>
  );
}

function Section({ id, index, kanji, title, children }) {
  return (
    <section id={id} className="section">
      <header className="section-head">
        <span className="section-index">
          {String(index).padStart(2, '0')} / <span className="kanji">{kanji}</span>
        </span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.github ? ' is-linked' : ''}`}>
      <div className="project-top">
        <span className={`project-kicker${project.award ? ' is-award' : ''}`}>
          {project.award && '★ '}
          {project.kicker}
        </span>
        {project.github && (
          <span className="project-link" aria-hidden="true">
            GitHub ↗
          </span>
        )}
      </div>
      <h3>
        {project.github ? (
          // ::after stretches this link over the whole card
          <a className="card-link" href={project.github} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p>{project.description}</p>
      <ul className="chips">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      {project.extraLinks && (
        <div className="card-extra-links">
          {project.extraLinks.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function Typewriter({ text }) {
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? text : ''));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 38);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <p className="typewriter">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {shown}
        <span className="cursor">▍</span>
      </span>
    </p>
  );
}

/* ── App ─────────────────────────────────────────────────── */

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="App">
      <WaveRail />

      <nav className="nav">
        <a href="#top" className="monogram" aria-label="Back to top">
          AK
        </a>
        <div className="nav-links">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a href="/Alekya_Kowta_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-accent">
            Resume ↗
          </a>
        </div>
      </nav>

      <main className="page">
        {/* Hero */}
        <header id="top" className="hero">
          <WaveCrest />
          <p className="eyebrow">Arlington, VA · Washington, DC</p>
          <h1 className="hero-name">Alekya Kowta</h1>
          <p className="hero-role">
            Product Manager <span className="amp">&amp;</span> Software Engineer
          </p>
          <Typewriter text="Shipping account-servicing platforms at Capital One; previously built backend systems for 150M+ devices at Dell." />
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-accent">
              View projects
            </a>
            <a href="/Alekya_Kowta_Resume.pdf" target="_blank" rel="noreferrer" className="btn">
              Resume ↗
            </a>
            <a href="https://www.github.com/AlekyaKowta" target="_blank" rel="noreferrer" className="btn">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/alekya-kowta" target="_blank" rel="noreferrer" className="btn">
              LinkedIn ↗
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>819,236</dt>
              <dd>accounts migrated</dd>
            </div>
            <div>
              <dt>150M+</dt>
              <dd>devices served</dd>
            </div>
            <div>
              <dt>2 × 10</dt>
              <dd>engineers led as PM</dd>
            </div>
          </dl>
        </header>

        {/* Experience */}
        <Section id="experience" index={1} kanji="経験" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="job">
                <div className="job-meta">
                  <span className="job-dates">{job.dates}</span>
                  <span className="job-location">{job.location}</span>
                </div>
                <div className="job-body">
                  <h3>
                    {job.company}
                    {job.via && <span className="job-via"> ({job.via})</span>}
                  </h3>
                  <p className="job-role">{job.role}</p>
                  <ul className="job-points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <ul className="chips">
                    {job.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="subgrid">
            <div>
              <h3 className="subhead">Skills</h3>
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.group} className="skill-row">
                    <dt>{s.group}</dt>
                    <dd>
                      <ul className="chips">
                        {s.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="subhead">Education</h3>
              <ul className="education">
                {education.map((e) => (
                  <li key={e.school}>
                    <span className="job-dates">{e.dates}</span>
                    <h4>{e.school}</h4>
                    <p className="job-role">{e.degree}</p>
                    <p className="muted">{e.detail}</p>
                    <p className="muted small">{e.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" index={2} kanji="作品" title="Projects">
          <div className="project-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <h3 className="subhead">More work</h3>
          <ul className="more-list">
            {moreProjects.map((p) => (
              <li key={p.title}>
                <div>
                  <h4>{p.title}</h4>
                  <p className="muted">{p.note}</p>
                </div>
                <span className="more-stack">{p.stack}</span>
                <span className="more-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Beyond the code */}
        <Section id="beyond" index={3} kanji="余白" title="Beyond the Code">
          <p className="lede">
            Where algorithms meet aesthetics. <em>I paint with light, and sketch with silence.</em>
          </p>

          <div className="gallery-block">
            <h3 className="subhead">Art &amp; Illustration</h3>
            <div className="gallery gallery-art">
              {gallery.art.map((src, i) => (
                <figure key={src}>
                  <img src={src} alt={`Artwork ${i + 1} by Alekya Kowta`} loading="lazy" />
                  <figcaption>Art {String(i + 1).padStart(2, '0')}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="gallery-block">
            <h3 className="subhead">Photography</h3>
            <div className="gallery gallery-photo">
              {gallery.photo.map((src, i) => (
                <figure key={src}>
                  <img src={src} alt={`Photograph ${i + 1} by Alekya Kowta`} loading="lazy" />
                  <figcaption>Photo {String(i + 1).padStart(2, '0')}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>
      </main>

      {/* Contact */}
      <footer id="contact" className="footer">
        <div className="footer-inner">
          <p className="section-index">
            04 / <span className="kanji">連絡</span>
          </p>
          <h2 className="footer-title">Let's build something.</h2>
          <p className="muted">Open to product and engineering roles, and collaborations.</p>
          <div className="footer-links">
            <a href="mailto:a.kowta@gwu.edu">a.kowta@gwu.edu</a>
            <a href="tel:7039460261">703-946-0261</a>
            <a href="/Alekya_Kowta_Resume.pdf" target="_blank" rel="noreferrer">
              Resume ↗
            </a>
            <a href="https://www.linkedin.com/in/alekya-kowta" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://www.github.com/AlekyaKowta" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Alekya Kowta · Arlington, VA</span>
            <span>Built with React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
