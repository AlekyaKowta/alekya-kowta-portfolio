import React, { useState, useEffect } from 'react';
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

const skills = [
  { name: 'Java',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C#',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'C++',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'SQL',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Spring Boot',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Docker',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Azure',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Redis',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Oracle',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Jenkins',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Kafka',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Linux',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

function MathArt() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = 140;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Outer glow ring
      const glow = ctx.createRadialGradient(cx, cy, 30, cx, cy, 100);
      glow.addColorStop(0, 'rgba(255, 100, 180, 0.08)');
      glow.addColorStop(1, 'rgba(255, 100, 180, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      const t = frame * 0.012;
      const k = 5; // rose petals (try 3, 5, 7)

      // Draw trailing layers for depth
      [0.018, 0.012, 0.006, 0].forEach((offset, i) => {
        const alpha = 0.15 + i * 0.2;
        const radius = 68 + Math.sin(t * 0.7) * 3;

        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.008) {
          const r = radius * Math.cos(k * (a + t * 0.3 + offset));
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();

        const grad = ctx.createLinearGradient(cx - 80, cy - 80, cx + 80, cy + 80);
        grad.addColorStop(0, `rgba(255, 133, 194, ${alpha})`);
        grad.addColorStop(0.5, `rgba(220, 0, 110, ${alpha * 0.8})`);
        grad.addColorStop(1, `rgba(180, 80, 160, ${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5 - i * 0.3;
        ctx.stroke();
      });

      // Lissajous center accent
      ctx.beginPath();
      for (let i = 0; i <= 300; i++) {
        const s = (i / 300) * Math.PI * 2;
        const x = cx + 22 * Math.sin(3 * s + t * 0.5);
        const y = cy + 22 * Math.cos(2 * s + t * 0.3);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(255, 180, 220, 0.6)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(220, 0, 110, 0.5)';
      ctx.fill();

      frame++;
      requestAnimationFrame(draw);
    };

    const anim = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(anim);
  }, []);

  return (
    <div className="math-art-wrap">
      <canvas ref={canvasRef} className="math-canvas" />
      {/* <span className="math-label">r = cos(5θ)</span> */}
    </div>
  );
}


function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Alekya Kowta - a passionate software engineer crafting scalable systems across distributed cloud infrastructure.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (index) => {
    if (index === 2) {
      document.querySelector('.contact-footer')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.querySelectorAll('.section')[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Cover Section */}
      <section className="cover">
        <div className="cover-content">
          <MathArt />
          <h1 className="name">Alekya Kowta</h1>
          <p className="subtitle">Software Engineer</p>
          <p className="typewriter">{typedText}<span className="cursor">|</span></p>
          <div className="nav-links">
            <button onClick={() => scrollToSection(0)} className="nav-btn">About</button>
            <button onClick={() => scrollToSection(1)} className="nav-btn">Projects</button>
            <button onClick={() => scrollToSection(2)} className="nav-btn">Contact</button>
            <a
              href="/Alekya_Kowta_Resume.pdf"
              download="Alekya_Kowta_Resume.pdf"
              className="nav-btn resume-btn"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <h2>About</h2>

        {/* Skills */}
        <div className="skills-block">
          <h3>Technical Skills</h3>
          <div className="skills-pills">
            {skills.map((skill) => (
              <div className="skill-pill" key={skill.name}>
                <img src={skill.logo} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="experience-block">
          <h3>Experience</h3>

          <div className="exp-item">
            <div className="exp-header">
              <span className="exp-title">Software Engineer I — Dell Technologies</span>
              <span className="exp-date">Aug 2022 – Aug 2025</span>
            </div>
            <ul className="exp-list">
              <li>Designed APIs and distributed services to remotely configure 150M+ connected devices for global traffic.</li>
              <li>Led infrastructure migration to Kubernetes, achieving a 20% throughput gain and reduced deployment latency.</li>
              <li>Implemented high-throughput message passing using Kafka and Azure Event Hubs for real-time telemetry.</li>
              <li>Optimized low-latency microservices with Redis, reducing data retrieval times at high concurrency.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <span className="exp-title">Software Engineering Intern — Dell Technologies</span>
              <span className="exp-date">Jan 2022 – Aug 2022</span>
            </div>
            <ul className="exp-list">
              <li>Built real-time operational dashboards using Grafana and PowerBI to visualize service performance metrics.</li>
              <li>Developed proofs-of-concept and presented feasibility analyses to engineering leadership.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <span className="exp-title">Web Development Intern — GKMT IT</span>
              <span className="exp-date">Mar 2020 – Jun 2020</span>
            </div>
            <ul className="exp-list">
              <li>Engineered responsive web platforms and improved page load times by 25%.</li>
              <li>Designed secure user registration systems, significantly reducing support requests.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>AI-Generated Image Verification</h3>
            <p className="project-tags">Python · Selenium · Ethereum · Solidity</p>
            <p>Classifies images as human-generated vs AI-generated. User votes recorded via Solidity smart contracts for transparency and integrity.</p>
          </div>
          <div className="project-card">
            <h3>Traffic Data Analysis using YOLO Object Detection Models</h3>
            <p className="project-tags">ML</p>
            <p>Performed extensive data cleaning, validation, and preprocessing on large image datasets to train and evaluate machine learning models for real-world scenarios.</p>
          </div>
          <div className="project-card">
            <h3>Smart Walking System</h3>
            <p className="project-tags">IoT · Embedded Systems</p>
            <p>Patented assistive navigation system for the elderly and visually impaired. Filed as a Patent Application (2022).</p>
          </div>
          <div className="project-card">
            <h3>Pentesting & IoT Security Research</h3>
            <p className="project-tags">IEEE · Springer · Cybersecurity</p>
            <p>Published two papers on information gathering for pentesting (IEEE) and IoT vulnerabilities and threats (Springer, 2022).</p>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="section hobbies">
        <div className="hobbies-header">
          <h2>Beyond the Code</h2>
          <p className="hobbies-tagline">
            Where algorithms meet aesthetics —<br/>
            <em>I paint with light, and sketch with silence.</em>
          </p>
        </div>

        <div className="hobbies-split">
        {/* Art */}
        <div className="hobby-block">
          <div className="hobby-label">
            <span className="hobby-number">01</span>
            <div>
              <h3>Art & Illustration</h3>
              <p>Translating emotion into strokes. Every canvas is a system with its own logic.</p>
            </div>
          </div>
          <div className="gallery-art">
            <div className="gallery-cell tall">
              <div className="gallery-img-wrap">
                <img src={art1} alt="" className="gallery-img" />
                <span className="gallery-label">Art 01</span>
              </div>
            </div>
            <div className="gallery-col">
              <div className="gallery-cell">
                <div className="gallery-img-wrap">
                  <img src={art2} alt="" className="gallery-img" />
                  <span className="gallery-label">Art 02</span>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="gallery-img-wrap">
                  <img src={art3} alt="" className="gallery-img" />
                  <span className="gallery-label">Art 03</span>
                </div>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="gallery-img-wrap">
                <img src={art4} alt="" className="gallery-img" />
                <span className="gallery-label">Art 04</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hobby-divider" />

        {/* Photography */}
        <div className="hobby-block">
          <div className="hobby-label">
            <span className="hobby-number">02</span>
            <div>
              <h3>Photography</h3>
              <p>Capturing the frames between moments. Finding symmetry in the unscripted world.</p>
            </div>
          </div>
          <div className="gallery-photo">
            <div className="gallery-cell cell-tall-left">
              <div className="gallery-img-wrap">
                <img src={photo1} alt="" className="gallery-img" />
                <span className="gallery-label">Photo 01</span>
              </div>
            </div>
            <div className="gallery-cell cell-mid-top-1">
              <div className="gallery-img-wrap">
                <img src={photo2} alt="" className="gallery-img" />
                <span className="gallery-label">Photo 02</span>
              </div>
            </div>
            <div className="gallery-cell cell-mid-top-2">
              <div className="gallery-img-wrap">
                <img src={photo3} alt="" className="gallery-img" />
                <span className="gallery-label">Photo 03</span>
              </div>
            </div>
            <div className="gallery-cell cell-tall-right">
              <div className="gallery-img-wrap">
                <img src={photo4} alt="" className="gallery-img" />
                <span className="gallery-label">Photo 04</span>
              </div>
            </div>
            <div className="gallery-cell cell-mid-bot">
            <div className="gallery-img-wrap">
              <img src={photo5} alt="" className="gallery-img" />
              <span className="gallery-label">Photo 05</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Contact Footer */}
      <footer className="contact-footer">
        <div className="contact-top">
          <div className="contact-left">
            <h2>Let's connect</h2>
            <p className="contact-sub">Open to new opportunities and collaborations.</p>
          </div>
          <div className="contact-right">
            <a href="mailto:a.kowta@gwu.edu" className="contact-item">
              <span className="contact-icon">✉</span>
              <span>a.kowta@gwu.edu</span>
            </a>
            <a href="tel:7039460261" className="contact-item">
              <span className="contact-icon">✆</span>
              <span>703-946-0261</span>
            </a>
            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
            </div>
          </div>
        </div>
        <div className="contact-divider" />
        <div className="contact-bottom">
          <span className="contact-copy">© 2025 Alekya Kowta · Arlington, VA</span>
          <span className="contact-tagline">Built with React</span>
        </div>
      </footer>
    </div>
  );
}

export default App;