import './style.css';

// ─── Constants ───────────────────────────────────────────────────────────────

const GITHUB_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true" style="vertical-align:middle;flex-shrink:0"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;

const DOWNLOAD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="12" x2="12" y2="18"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`;

// TODO: Replace '#' with your actual hosted resume PDF link (Google Drive, GitHub, etc.)
const RESUME_URL = "/Varun's Resume.pdf";

// TODO: Sign up at https://formspree.io → create a form → paste your Form ID here
const FORMSPREE_ID = 'YOUR_FORM_ID';

// ─── Data ────────────────────────────────────────────────────────────────────
const data = {
  name: 'Varun Biradar',
  title: 'Full-Stack Developer',
  tagline: 'I craft digital experiences that',
  roles: ['make an impact.', 'solve real problems.', 'scale seamlessly.', 'look stunning.'],
  bio: "I'm a passionate full-stack developer who loves building scalable web applications and solving complex problems with elegant code. From crafting pixel-perfect UIs to architecting robust backends — I do it all.",
  bio2: "When I'm not coding, I'm exploring new technologies, contributing to open source, and working on projects that create real-world value.",
  email: 'varunbiradar4300@gmail.com',
  github: 'https://github.com/VarunBiradar',
  linkedin: 'https://linkedin.com/in/varun-biradar5505',
  instagram: 'https://instagram.com/thevarunbiradar',
  location: 'India',

  stats: [
    { value: 11, suffix: '+', label: 'Projects Built' },
    { value: 5, suffix: '+', label: 'Tech Stacks' },
  ],

  // Fixed Bug 3: Replaced inaccurate "5+ Awards" with "B.E. CS" (accurate for a CS student)
  aboutCards: [
    { icon: '🚀', value: '11+', label: 'Projects' },
    { icon: '🎓', value: 'B.E.', label: 'CS Eng.' },
    { icon: '☕', value: '∞', label: 'Coffees' },
  ],

  skills: [
    {
      category: 'Frontend', icon: '🎨', iconClass: 'purple',
      items: [
        { name: 'React.js', pct: 90 },
        { name: 'JavaScript (ES6+)', pct: 92 },
        { name: 'HTML & CSS', pct: 95 },
        { name: 'Vite / Webpack', pct: 80 },
      ],
    },
    {
      category: 'Backend', icon: '⚙️', iconClass: 'pink',
      items: [
        { name: 'Node.js', pct: 85 },
        { name: 'Java', pct: 82 },
        { name: 'Spring Boot', pct: 78 },
        { name: 'REST APIs', pct: 88 },
      ],
    },
    {
      category: 'Database', icon: '🗄️', iconClass: 'cyan',
      items: [
        { name: 'MongoDB', pct: 82 },
        { name: 'PostgreSQL', pct: 75 },
        { name: 'Firebase', pct: 78 },
        { name: 'Redis', pct: 65 },
      ],
    },
    {
      category: 'DevOps & Tools', icon: '🛠️', iconClass: 'green',
      items: [
        { name: 'Git & GitHub', pct: 90 },
        { name: 'Docker', pct: 70 },
        { name: 'CI/CD', pct: 68 },
        { name: 'Linux / CLI', pct: 75 },
      ],
    },
  ],

  techBadges: [
    '☕ Java', '🌱 Spring', '🚀 Spring Boot', '⚛️ React',
    '🟨 JavaScript', '🟩 Node.js', '🍃 MongoDB', '🐍 Python',
    '🐳 Docker', '☁️ AWS', '🔥 Firebase', '📦 Vite',
    '🎨 Tailwind', '🔐 JWT', '📡 REST API', '🗃️ PostgreSQL',
    // Duplicated for seamless marquee loop
    '☕ Java', '🌱 Spring', '🚀 Spring Boot', '⚛️ React',
  ],

  // ─── Experience ───────────────────────────────────────────────────────────
  // TODO: Replace every entry with your real experience and education details.
  experience: [
    {
      role: ' Java Full Stack Intern ',          // TODO: update role title
      company: 'Jspiders Rajajinagar',      // TODO: update company name
      period: 'Feb 2026 – Aug 2026',     // TODO: update dates
      desc: 'Completed an internship working on real-world projects using modern web technologies. Update this with your actual experience, responsibilities, and key outcomes.',
      tags: ['React', 'Node.js', 'REST API'],
      icon: '💼',
    },
    {
      role: 'B.E. Computer Science & Engineering', // TODO: verify exact degree name
      company: 'Sharnbasva University',        // TODO: add your college/university name
      period: '2022 – 2026',            // TODO: update if needed
      desc: 'Pursuing a Bachelor\'s degree in Computer Science with a strong focus on full-stack development, data structures & algorithms, database systems, operating systems, and software engineering.',
      tags: ['DSA', 'DBMS', 'OS', 'CN', 'SE'],
      icon: '🎓',
    },
  ],

  // ─── Certifications ───────────────────────────────────────────────────────
  // TODO: Replace all entries below with your actual certifications.
  // Set `link` to the certificate verification URL (Coursera, Credly, etc.)
  certifications: [
    {
      name: 'EnlightedCode2.0 Hackathon Certifcate',
      issuer: 'EnlightedCode2.0 Hackathon',
      year: '2025',
      icon: '🏅',
      colorClass: 'purple',
      link: '#',
    },
    {
      name: 'Artificaial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      year: '2026',
      icon: '🎖️',
      colorClass: 'blue',
      link: '#',
    },
    {
      name: 'AI Enabled Applications Certifcate',
      issuer: 'IBM SkillsBuild',
      year: '2026',
      icon: '📜',
      colorClass: 'cyan',
      link: '#',
    },
    {
      name: 'Introduction to Google Cloud Platform ',
      issuer: 'Google Cloud',
      year: '2026',
      icon: '🔖',
      colorClass: 'green',
      link: '#',
    },
  ],

  projects: [
    {
      name: 'Digital Learning Platform for Nabha',
      desc: 'A bilingual (English/Punjabi), offline-ready MERN stack learning platform for rural schools in Nabha. Features student & teacher dashboards, lesson library, and role-based access control.',
      tags: ['react', 'node', 'mongo', 'featured-tag'],
      tagLabels: ['React', 'Node.js', 'MongoDB', 'Featured'],
      emoji: '📚',
      gradient: 'linear-gradient(135deg, #1e3a5f, #2d6a4f)',
      category: 'fullstack',
      github: 'https://github.com/VarunBiradar/Digital-Learning-System-For-Nabha',
      live: 'https://digital-learning-system-for-nabha.vercel.app/', // TODO: replace with deployed URL when available
    },
    {
      name: 'Lost and Found Portal',
      desc: 'A full-stack platform built with Java Spring Boot and React to help users easily report and recover lost items securely and efficiently.',
      tags: ['react', 'java', 'featured-tag'],
      tagLabels: ['React', 'Spring Boot', 'Full-Stack'],
      emoji: '🔍',
      gradient: 'linear-gradient(135deg, #4d2b00, #8f5000)',
      category: 'fullstack',
      github: 'https://github.com/VarunBiradar/Lost-and-Found-Portal',
      live: 'https://lost-and-found-portal-eta.vercel.app/', // TODO: replace with deployed URL when available
    },
    {
      name: 'Lyra Prompt Optimizer',
      desc: 'Built a MERN stack web application that transforms unclear user prompts into optimized, structured prompts for LLMs (ChatGPT, Claude, Gemini). Features a responsive React.js interface for managing templates, reducing prompt iteration time, and uses RESTful APIs with MongoDB for persistent storage.',
      tags: ['react', 'node', 'mongo', 'featured-tag'],
      tagLabels: ['React.js', 'Node.js', 'MongoDB', 'LLM APIs'],
      emoji: '✨',
      gradient: 'linear-gradient(135deg, #1a1a24, #2a2a35)',
      category: 'ai',
      github: 'https://github.com/VarunBiradar/LYRA-Prompt-Optimizer', // TODO: Add GitHub link if available
      live: 'https://lyra-prompt-optimizer.vercel.app/', // TODO: Add Live Website link
    },
    {
      name: 'Banking Fraud Detection',
      desc: 'Built an intelligent fraud detection system using Java and Spring Boot to analyze financial transactions in real time. Applied machine learning algorithms to identify suspicious transaction patterns, improving detection accuracy. Designed backend services and REST APIs to process and flag transactions.',
      tags: ['java', 'spring', 'ml'],
      tagLabels: ['Java', 'Spring Boot', 'Machine Learning'],
      emoji: '🛡️',
      gradient: 'linear-gradient(135deg, #2b112c, #4e1c2d)',
      category: 'ai',
      github: 'https://github.com/VarunBiradar/Banking-Fraud-Detection-System', // TODO: Add GitHub link if available
      live: '#', // TODO: Add Live Website link
    },
    {
      name: 'DevConnect Platform',
      desc: 'A real-time developer collaboration platform with live code editing, video calls, and project management tools built for remote teams.',
      tags: ['react', 'node', 'js'],
      tagLabels: ['React', 'Node.js', 'JS'],
      emoji: '💻',
      gradient: 'linear-gradient(135deg, #1a1040, #2d1b69)',
      category: 'fullstack',
      github: 'https://github.com/VarunBiradar/Dev-Connect',
      live: '#', // TODO: replace with deployed URL when available
    },
    {
      name: 'AI Resume Shortlisting Tool',
      desc: 'An intelligent resume screening tool built with Python and Streamlit. Uses NLP and AI to automatically rank and shortlist candidates based on job descriptions, saving hours of manual review.',
      tags: ['js', 'node', 'featured-tag'],
      tagLabels: ['Python', 'Streamlit', 'AI/NLP'],
      emoji: '🧠',
      gradient: 'linear-gradient(135deg, #1a0a3d, #3b1f8c)',
      category: 'ai',
      github: 'https://github.com/VarunBiradar/AI-resume-shortlisting-tool',
      live: '#', // TODO: replace with deployed URL when available
    },
  ],
};

// ─── Render App ───────────────────────────────────────────────────────────────
document.querySelector('#app').innerHTML = `

  <!-- Background System -->
  <div class="bg-system">
    <div class="bg-noise"></div>
    <div class="bg-grid"></div>
    <div class="orb orb-1" id="orb1"></div>
    <div class="orb orb-2" id="orb2"></div>
    <div class="orb orb-3" id="orb3"></div>
  </div>

  <!-- Scroll-to-Top Button -->
  <button class="scroll-top" id="scroll-top" aria-label="Scroll to top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
      stroke-linejoin="round" width="20" height="20">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>

  <!-- Navbar -->
  <nav id="navbar">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">Varun</a>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about"      class="nav-link">About</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#projects"   class="nav-link">Projects</a></li>
        <li><a href="#contact"    class="nav-cta">Hire Me</a></li>
      </ul>
      <div class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>

  <!-- ─── HERO ─── -->
  <section id="hero">
    <div class="container">
      <div class="hero-grid">

        <div class="hero-content">
          <div class="hero-badge">
            <span class="dot"></span>
            Available for Opportunities
          </div>
          <h1 class="hero-title">
            ${data.tagline}<br/>
            <span style="display: grid; grid-template-columns: 1fr; white-space: nowrap;">
              ${data.roles.map(r => `<span style="grid-area: 1 / 1; visibility: hidden; pointer-events: none;">${r}</span>`).join('')}
              <span style="grid-area: 1 / 1;">
                <span class="gradient-text" id="typewriter"></span><span class="typewriter-cursor"></span>
              </span>
            </span>
          </h1>
          <p class="hero-subtitle">${data.bio.split('.')[0] + '.'} I specialize in the MERN stack and love building products that solve real problems.</p>

          <div class="hero-actions">
            <a href="#projects" class="btn-primary" id="view-work-btn">
              View My Work <span style="margin-left:4px">→</span>
            </a>
            <a href="${RESUME_URL}" class="btn-resume" id="download-cv-btn"
              ${RESUME_URL !== '#' ? 'download' : ''} target="_blank" rel="noopener">
              ${DOWNLOAD_ICON} Download CV
            </a>
            <a href="#contact" class="btn-ghost" id="contact-hero-btn">
              Get In Touch
            </a>
          </div>

          <div class="hero-stats" id="counter-section">
            ${data.stats.map(s => `
              <div class="stat-item">
                <div class="stat-value">
                  <span class="counter" data-target="${s.value}">0</span>${s.suffix}
                </div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>



      </div>
    </div>
  </section>

  <!-- ─── ABOUT ─── -->
  <section id="about">
    <div class="container">
      <div class="about-grid">

        <div class="about-image-wrap reveal">
          <div class="about-card-grid">
            ${data.aboutCards.map((c, i) => `
              <div class="mini-card" style="animation-delay:${i * 0.1}s">
                <span class="mini-icon">${c.icon}</span>
                <div class="mini-value">${c.value}</div>
                <div class="mini-label">${c.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="about-text reveal" style="transition-delay:0.2s">
          <span class="section-label">About Me</span>
          <h2 class="section-title">Passionate about crafting
            <span style="background:var(--gradient-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">great software</span>
          </h2>
          <p>${data.bio}</p>
          <p>${data.bio2}</p>
          <div class="tag-list">
            <span class="tag">Full-Stack Dev</span>
            <span class="tag">MERN Stack</span>
            <span class="tag">UI/UX Lover</span>
            <span class="tag">Open Source</span>
            <span class="tag">Problem Solver</span>
            <span class="tag">Fast Learner</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ─── EXPERIENCE ─── -->
  <section id="experience">
    <div class="container">
      <div class="reveal" style="text-align:center;margin-bottom:16px">
        <span class="section-label">My Journey</span>
      </div>
      <h2 class="section-title reveal" style="text-align:center;transition-delay:0.1s">
        Experience &amp;
        <span style="background:var(--gradient-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Education</span>
      </h2>
      <p class="section-subtitle reveal" style="text-align:center;margin:0 auto 64px;max-width:520px;transition-delay:0.2s">
        My professional journey and academic background — where I've been and what I've learned along the way.
      </p>

      <div class="timeline">
        ${data.experience.map((item, i) => `
          <div class="timeline-item reveal" style="transition-delay:${i * 0.18}s">
            <div class="timeline-connector">
              <div class="timeline-dot"><span>${item.icon}</span></div>
              ${i < data.experience.length - 1 ? '<div class="timeline-line"></div>' : ''}
            </div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div>
                  <h3 class="timeline-role">${item.role}</h3>
                  <div class="timeline-company">${item.company}</div>
                </div>
                <span class="timeline-period">${item.period}</span>
              </div>
              <p class="timeline-desc">${item.desc}</p>
              <div class="timeline-tags">
                ${item.tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ─── SKILLS ─── -->
  <section id="skills">
    <div class="container">
      <div class="reveal" style="text-align:center;margin-bottom:16px">
        <span class="section-label">Expertise</span>
      </div>
      <h2 class="section-title reveal" style="text-align:center;transition-delay:0.1s">
        My <span style="background:var(--gradient-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Tech Stack</span>
      </h2>
      <p class="section-subtitle reveal" style="text-align:center;margin:0 auto 0;max-width:520px;transition-delay:0.2s">
        Technologies I use to bring ideas to life — from pixel-perfect UIs to robust backend systems.
      </p>

      <div class="skills-grid">
        ${data.skills.map((cat, i) => `
          <div class="skill-category reveal" style="transition-delay:${i * 0.15}s">
            <div class="skill-cat-title">
              <div class="cat-icon ${cat.iconClass}">${cat.icon}</div>
              ${cat.category}
            </div>
            <div class="skill-bars">
              ${cat.items.map(skill => `
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-pct">${skill.pct}%</span>
                  </div>
                  <div class="skill-track">
                    <div class="skill-fill" data-pct="${skill.pct}"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="tech-marquee-wrapper reveal" style="transition-delay:0.4s">
        <div class="tech-badges">
          ${data.techBadges.map(b => `<span class="tech-badge">${b}</span>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- ─── PROJECTS ─── -->
  <section id="projects">
    <div class="container">
      <div class="projects-header reveal">
        <div>
          <span class="section-label">My Work</span>
          <h2 class="section-title">Featured
            <span style="background:var(--gradient-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Projects</span>
          </h2>
        </div>
        <a href="${data.github}" class="btn-secondary" target="_blank" rel="noopener">View All on GitHub →</a>
      </div>

      <!-- Project Filters -->
      <div class="project-filters reveal" style="transition-delay:0.1s">
        <button class="filter-btn active" data-filter="all"       id="filter-all">All</button>
        <button class="filter-btn"        data-filter="fullstack" id="filter-fullstack">Full-Stack</button>
        <button class="filter-btn"        data-filter="ai"        id="filter-ai">AI / ML</button>
      </div>

      <div class="projects-grid" id="projects-grid">
        ${data.projects.map((p, i) => `
          <div class="project-card ${p.featured ? 'featured' : ''} reveal tilt-card"
               data-category="${p.category}"
               style="transition-delay:${i * 0.1}s">
            <div class="project-thumbnail-bg" style="background:${p.gradient}">
              <span>${p.emoji}</span>
            </div>
            <div class="project-body">
              <div class="project-tags">
                ${p.tags.map((t, ti) => `<span class="project-tag ${t}">${p.tagLabels[ti]}</span>`).join('')}
              </div>
              <h3 class="project-name">${p.name}</h3>
              <p class="project-desc">${p.desc}</p>
              <div class="project-links">
                ${p.live && p.live !== '#' ? `
                  <a href="${p.live}" class="project-link primary" id="project-live-${i}" target="_blank" rel="noopener">
                    🚀 Live Demo
                  </a>
                ` : ''}
                ${p.github ? `
                  <a href="${p.github}" class="project-link ${p.live && p.live !== '#' ? 'ghost' : 'primary'}" id="project-github-${i}" target="_blank" rel="noopener">
                    ${GITHUB_ICON} GitHub
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ─── CERTIFICATIONS ─── -->
  <section id="certifications">
    <div class="container">
      <div class="reveal" style="text-align:center;margin-bottom:16px">
        <span class="section-label">Credentials</span>
      </div>
      <h2 class="section-title reveal" style="text-align:center;transition-delay:0.1s">
        My <span style="background:var(--gradient-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Certifications</span>
      </h2>
      <p class="section-subtitle reveal" style="text-align:center;margin:0 auto 60px;max-width:520px;transition-delay:0.2s">
        Verified credentials and professional certifications that validate my expertise.
      </p>
      <div class="cert-grid">
        ${data.certifications.map((cert, i) => `
          <a href="${cert.link}" class="cert-card reveal"
             target="_blank" rel="noopener"
             style="transition-delay:${i * 0.1}s">
            <div class="cert-icon-wrap ${cert.colorClass}">
              <span class="cert-emoji">${cert.icon}</span>
            </div>
            <div class="cert-info">
              <div class="cert-name">${cert.name}</div>
              <div class="cert-issuer">${cert.issuer}</div>
              <span class="cert-year">${cert.year}</span>
            </div>
            <div class="cert-arrow">→</div>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ─── CONTACT ─── -->
  <section id="contact">
    <div class="container">
      <div class="contact-grid">

        <div class="contact-info reveal">
          <span class="section-label">Get In Touch</span>
          <h2>Let's Build
            <span style="background:var(--gradient-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Something Great</span>
            Together
          </h2>
          <p>Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open!</p>

          <div class="contact-methods">
            <a href="mailto:${data.email}" class="contact-method" id="email-link">
              <div class="cm-icon">📧</div>
              <div class="cm-text">
                <div class="cm-label">Email</div>
                <div class="cm-value">${data.email}</div>
              </div>
            </a>
            <a href="${data.github}" class="contact-method" id="github-link" target="_blank" rel="noopener">
              <div class="cm-icon cm-icon-svg">${GITHUB_ICON}</div>
              <div class="cm-text">
                <div class="cm-label">GitHub</div>
                <div class="cm-value">github.com/VarunBiradar</div>
              </div>
            </a>
            <a href="${data.linkedin}" class="contact-method" id="linkedin-link" target="_blank" rel="noopener">
              <div class="cm-icon">💼</div>
              <div class="cm-text">
                <div class="cm-label">LinkedIn</div>
                <div class="cm-value">linkedin.com/in/varun-biradar5505</div>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-form reveal" style="transition-delay:0.2s">
          <form id="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <input type="text"  id="form-name"  name="name"  placeholder=" " required />
                <label for="form-name">Your Name</label>
              </div>
              <div class="form-group">
                <input type="email" id="form-email" name="email" placeholder=" " required />
                <label for="form-email">Email Address</label>
              </div>
            </div>
            <div class="form-group">
              <input type="text" id="form-subject" name="subject" placeholder=" " />
              <label for="form-subject">Subject</label>
            </div>
            <div class="form-group">
              <textarea id="form-message" name="message" placeholder=" " required></textarea>
              <label for="form-message">Message</label>
            </div>
            <button type="submit" class="btn-primary form-submit" id="form-submit-btn">
              Send Message 🚀
            </button>
            <div class="success-msg" id="success-msg">
              ✅ Message sent! I'll get back to you soon.
            </div>
            <div class="error-msg" id="error-msg">
              ❌ Something went wrong. Please email me directly.
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>

  <!-- ─── FOOTER ─── -->
  <!-- Fixed Bug 6: Dynamic year via new Date().getFullYear() -->
  <footer>
    <div class="footer-inner">
      <div class="footer-logo">Varun</div>
      <div class="footer-copy">© ${new Date().getFullYear()} · Built By Varun with ❤️ and lots of ☕</div>
      <div class="footer-socials">
        <!-- Fixed Bug 7: Proper GitHub SVG icons replacing ⑂ unicode character -->
        <a href="${data.github}"    class="social-link" id="footer-github"    title="GitHub"    target="_blank" rel="noopener">${GITHUB_ICON}</a>
        <a href="${data.linkedin}"  class="social-link" id="footer-linkedin"  title="LinkedIn"  target="_blank" rel="noopener">💼</a>
        <a href="${data.instagram}" class="social-link" id="footer-instagram" title="Instagram" target="_blank" rel="noopener">📸</a>
        <a href="mailto:${data.email}" class="social-link" id="footer-email"  title="Email">📧</a>
      </div>
    </div>
  </footer>
`;

// ─── Page Load Animation ──────────────────────────────────────────────────────
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});


// ─── References (declared early so scroll handler can access them) ─────────────
const scrollTopBtn = document.getElementById('scroll-top');
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-link');

// ─── Navbar Scroll & Active Link ──────────────────────────────────────────────
// Fixed Bug 8: use window.scrollY instead of deprecated pageYOffset
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinksItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });

  // Scroll-to-top visibility
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('mobile-open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('mobile-open');
  });
});

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

// ─── Skill Bar Animation ──────────────────────────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        setTimeout(() => { fill.style.width = fill.getAttribute('data-pct') + '%'; }, 200);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

// ─── Counter Animation ────────────────────────────────────────────────────────
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const inc = target / 200;

      const updateCount = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// ─── Typewriter Effect ────────────────────────────────────────────────────────
const typeWriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const role = data.roles[roleIndex];
  typeWriterEl.innerText = isDeleting
    ? role.substring(0, --charIndex)
    : role.substring(0, ++charIndex);

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === role.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % data.roles.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

setTimeout(typeEffect, 2000);

// ─── Parallax Background Orbs ─────────────────────────────────────────────────
const orbs = ['orb1', 'orb2', 'orb3'].map(id => document.getElementById(id));

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  if (orbs[0]) orbs[0].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  if (orbs[1]) orbs[1].style.transform = `translate(${x * -40}px, ${y * -40}px)`;
  if (orbs[2]) orbs[2].style.transform = `translate(${x * 20}px, ${y * -20}px)`;
});

// ─── Project Filters ──────────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.project-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('project-hidden', !match);
    });
  });
});

// ─── Scroll To Top ────────────────────────────────────────────────────────────
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Contact Form (Formspree) ─────────────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('success-msg');
  const errorMsg = document.getElementById('error-msg');

  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';

  btn.textContent = 'Sending…';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  // Fallback: if Formspree ID isn't configured yet, open mail client
  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    const subject = encodeURIComponent(document.getElementById('form-subject').value || 'Portfolio Contact');
    const body = encodeURIComponent(document.getElementById('form-message').value);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    btn.textContent = 'Send Message 🚀';
    btn.style.opacity = '1';
    btn.disabled = false;
    return;
  }

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      btn.textContent = 'Message Sent! 🎉';
      btn.style.opacity = '1';
      successMsg.style.display = 'flex';
      e.target.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message 🚀';
        btn.disabled = false;
        successMsg.style.display = 'none';
      }, 5000);
    } else {
      throw new Error('Formspree error');
    }
  } catch {
    btn.textContent = 'Try Again';
    btn.style.opacity = '1';
    btn.disabled = false;
    errorMsg.style.display = 'flex';
    setTimeout(() => { errorMsg.style.display = 'none'; }, 5000);
  }
});

// ─── Smooth Scrolling (Lenis) ────────────────────────────────────────────────
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

// ─── Custom Cursor ──────────────────────────────────────────────────────────
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

if (cursorDot && cursorOutline && typeof gsap !== 'undefined') {
  gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });
  gsap.set(cursorOutline, { xPercent: -50, yPercent: -50 });

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    gsap.set(cursorDot, { x: posX, y: posY });
    gsap.to(cursorOutline, { x: posX, y: posY, duration: 0.15, ease: 'power2.out' });
  });

  const hoverElements = document.querySelectorAll('a, button, .project-card, .mini-card, .skill-category');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

// ─── Magnetic Buttons ───────────────────────────────────────────────────────
const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta, .social-link');

if (typeof gsap !== 'undefined') {
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}
