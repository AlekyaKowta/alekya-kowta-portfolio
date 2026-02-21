import React, { useState, useEffect } from 'react';
import './App.css';

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
    document.querySelectorAll('.section')[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Cover Section */}
      <section className="cover">
        <div className="cover-content">
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
        <h2 className="section-title">About</h2>
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

      {/* Contact Section */}
      <section className="section contact">
        <h2>Contact</h2>
        <p>a.kowta@gwu.edu</p>
        <p>703-946-0261</p>
        <p>Arlington, VA</p>
      </section>
    </div>
  );
}

export default App;