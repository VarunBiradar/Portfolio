import './style.css';

// ─── Data ───────────────────────────────────────────
const data = {
  name: "Varun Biradar",
  title: "Full-Stack Developer",
  tagline: "I craft digital experiences that",
  roles: ["make an impact.", "solve real problems.", "scale seamlessly.", "look stunning."],
  bio: "I'm a passionate full-stack developer who loves building scalable web applications and solving complex problems with elegant code. From crafting pixel-perfect UIs to architecting robust backends — I do it all.",
  bio2: "When I'm not coding, I'm exploring new technologies, contributing to open source, and working on projects that create real-world value.",
  email: "varunbiradar4300@gmail.com",
  github: "https://github.com/VarunBiradar",
  linkedin: "https://linkedin.com/in/varun-biradar5505",
  instagram: "https://instagram.com/thevarunbiradar",
  location: "India",

  stats: [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 11, suffix: "+", label: "Projects Built" },
    { value: 5, suffix: "+", label: "Tech Stacks" },
  ],

  aboutCards: [
    { icon: "🚀", value: "11+", label: "Projects" },
    { icon: "⚡", value: "2+", label: "Yrs Exp" },
    { icon: "🏆", value: "5+", label: "Awards" },
    { icon: "☕", value: "∞", label: "Coffees" },
  ],

  skills: [
    {
      category: "Frontend",
      icon: "🎨",
      iconClass: "purple",
      items: [
        { name: "React.js", pct: 90 },
        { name: "JavaScript (ES6+)", pct: 92 },
        { name: "HTML & CSS", pct: 95 },
        { name: "Vite / Webpack", pct: 80 },
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      iconClass: "pink",
      items: [
        { name: "Node.js", pct: 85 },
        { name: "Java", pct: 82 },
        { name: "Spring Boot", pct: 78 },
        { name: "REST APIs", pct: 88 },
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      iconClass: "cyan",
      items: [
        { name: "MongoDB", pct: 82 },
        { name: "PostgreSQL", pct: 75 },
        { name: "Firebase", pct: 78 },
        { name: "Redis", pct: 65 },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      iconClass: "green",
      items: [
        { name: "Git & GitHub", pct: 90 },
        { name: "Docker", pct: 70 },
        { name: "CI/CD", pct: 68 },
        { name: "Linux / CLI", pct: 75 },
      ]
    },
  ],

  techBadges: [
    "☕ Java", "🌱 Spring", "🚀 Spring Boot", "⚛️ React",
    "🟨 JavaScript", "🟩 Node.js", "🍃 MongoDB", "🐍 Python",
    "🐳 Docker", "☁️ AWS", "🔥 Firebase", "📦 Vite",
    "🎨 Tailwind", "🔐 JWT", "📡 REST API", "🗃️ PostgreSQL",
    "☕ Java", "🌱 Spring", "🚀 Spring Boot", "⚛️ React", // Duplicated for marquee effect
  ],

  projects: [
    {
      name: "Digital Learning Platform for Nabha",
      desc: "A bilingual (English/Punjabi), offline-ready MERN stack learning platform for rural schools in Nabha. Features student & teacher dashboards, lesson library, and role-based access control.",
      tags: ["react", "node", "mongo", "featured-tag"],
      tagLabels: ["React", "Node.js", "MongoDB", "Featured"],
      emoji: "📚",
      gradient: "linear-gradient(135deg, #1e3a5f, #2d6a4f)",
      featured: true,
      github: "https://github.com/VarunBiradar/Digital-Learning-System-For-Nabha",
      live: "#"
    },
    {
      name: "DevConnect Platform",
      desc: "A real-time developer collaboration platform with live code editing, video calls, and project management tools built for remote teams.",
      tags: ["react", "node", "js"],
      tagLabels: ["React", "Node.js", "JS"],
      emoji: "💻",
      gradient: "linear-gradient(135deg, #1a1040, #2d1b69)",
      github: "https://github.com/VarunBiradar/Dev-Connect",
      live: "#"
    },
    {
      name: "AI Resume Shortlisting Tool",
      desc: "An intelligent resume screening tool built with Python and Streamlit. Uses NLP and AI to automatically rank and shortlist candidates based on job descriptions, saving hours of manual review.",
      tags: ["js", "node", "featured-tag"],
      tagLabels: ["Python", "Streamlit", "AI/NLP"],
      emoji: "🧠",
      gradient: "linear-gradient(135deg, #1a0a3d, #3b1f8c)",
      github: "https://github.com/VarunBiradar/AI-resume-shortlisting-tool",
      live: "#"
    },
    {
      name: "AI Study Planner",
      desc: "A full-stack application that automatically generates smart study schedules based on subjects, deadlines, and user performance. Built with React and Spring Boot.",
      tags: ["react", "java", "featured-tag"],
      tagLabels: ["React", "Spring Boot", "MySQL"],
      emoji: "📅",
      gradient: "linear-gradient(135deg, #312e81, #4c1d95)",
      github: "https://github.com/VarunBiradar/AI-Study-Planner",
      live: "#"
    },
    {
      name: "Lost and Found Portal",
      desc: "A full-stack platform built with Java Spring Boot and React to help users easily report and recover lost items securely and efficiently.",
      tags: ["react", "java", "featured-tag"],
      tagLabels: ["React", "Spring Boot", "Full-Stack"],
      emoji: "🔍",
      gradient: "linear-gradient(135deg, #4d2b00, #8f5000)",
      github: "https://github.com/VarunBiradar/Lost-and-Found-Portal",
      live: "#"
    },
  ]
};

// ─── Render App ──────────────────────────────────────
document.querySelector('#app').innerHTML = `
  <!-- Custom Cursor -->
  <div class="custom-cursor" id="custom-cursor"></div>
  <div class="cursor-follower" id="cursor-follower"></div>

  <!-- Background System -->
  <div class="bg-system">
    <div class="bg-noise"></div>
    <div class="bg-grid"></div>
    <div class="orb orb-1" id="orb1"></div>
    <div class="orb orb-2" id="orb2"></div>
    <div class="orb orb-3" id="orb3"></div>
  </div>

  <!-- Navbar -->
  <nav id="navbar">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">Varun</a>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-cta">Hire Me</a></li>
      </ul>
      <div class="hamburger" id="hamburger" aria-label="Menu">
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
            <span class="gradient-text" id="typewriter"></span><span class="typewriter-cursor"></span>
          </h1>
          <p class="hero-subtitle">${data.bio.split('.')[0] + '.'} I specialize in the MERN stack and love building products that solve real problems.</p>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary" id="view-work-btn">
              View My Work <span style="margin-left: 5px;">→</span>
            </a>
            <a href="#contact" class="btn-secondary" id="contact-hero-btn">
              Get In Touch
            </a>
          </div>
          <div class="hero-stats" id="counter-section">
            ${data.stats.map((s, i) => `
              <div class="stat-item">
                <div class="stat-value"><span class="counter" data-target="${s.value}">0</span>${s.suffix}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="hero-visual">
          <div class="avatar-container" id="hero-tilt">
            <div class="avatar-glow"></div>
            <div class="avatar-ring"></div>
            <div class="avatar-inner">
              <span>👨‍💻</span>
            </div>
            <div class="floating-badge b1">
              <span class="badge-icon">⚡</span> React Developer
            </div>
            <div class="floating-badge b2">
              <span class="badge-icon">🌱</span> Open Source
            </div>
            <div class="floating-badge b3">
              <span class="badge-icon">🏆</span> Problem Solver
            </div>
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
              <div class="mini-card" style="animation-delay: ${i * 0.1}s">
                <span class="mini-icon">${c.icon}</span>
                <div class="mini-value">${c.value}</div>
                <div class="mini-label">${c.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="about-text reveal" style="transition-delay: 0.2s">
          <span class="section-label">About Me</span>
          <h2 class="section-title">Passionate about crafting <span style="background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">great software</span></h2>
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

  <!-- ─── SKILLS ─── -->
  <section id="skills">
    <div class="container">
      <div class="reveal" style="text-align: center; margin-bottom: 16px;">
        <span class="section-label">Expertise</span>
      </div>
      <h2 class="section-title reveal" style="text-align: center; transition-delay: 0.1s">My <span style="background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Tech Stack</span></h2>
      <p class="section-subtitle reveal" style="text-align: center; margin: 0 auto 0; max-width: 520px; transition-delay: 0.2s">Technologies I use to bring ideas to life — from pixel-perfect UIs to robust backend systems.</p>

      <div class="skills-grid">
        ${data.skills.map((cat, i) => `
          <div class="skill-category reveal" style="transition-delay: ${i * 0.15}s">
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

      <div class="tech-marquee-wrapper reveal" style="transition-delay: 0.4s">
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
          <h2 class="section-title">Featured <span style="background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Projects</span></h2>
        </div>
        <a href="${data.github}" class="btn-secondary" target="_blank" rel="noopener">View All on GitHub →</a>
      </div>

      <div class="projects-grid">
        ${data.projects.map((p, i) => `
          <div class="project-card ${p.featured ? 'featured' : ''} reveal tilt-card" style="transition-delay: ${i * 0.1}s">
            <div class="project-thumbnail-bg" style="background: ${p.gradient};">
              <span>${p.emoji}</span>
            </div>
            <div class="project-body">
              <div class="project-tags">
                ${p.tags.map((t, ti) => `<span class="project-tag ${t}">${p.tagLabels[ti]}</span>`).join('')}
              </div>
              <h3 class="project-name">${p.name}</h3>
              <p class="project-desc">${p.desc}</p>
              <div class="project-links">
                <a href="${p.live}" class="project-link primary" id="project-live-${i}" target="_blank" rel="noopener">
                  🚀 Live Demo
                </a>
                <a href="${p.github}" class="project-link ghost" id="project-github-${i}" target="_blank" rel="noopener">
                  ⑂ GitHub
                </a>
              </div>
            </div>
          </div>
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
          <h2>Let's Build <span style="background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Something Great</span> Together</h2>
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
              <div class="cm-icon">⑂</div>
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

        <div class="contact-form reveal" style="transition-delay: 0.2s">
          <form id="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <input type="text" id="form-name" name="name" placeholder=" " required />
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
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── FOOTER ─── -->
  <footer>
    <div class="footer-inner">
      <div class="footer-logo">Varun</div>
      <div class="footer-copy">© 2025 · Built with ❤️ and lots of ☕</div>
      <div class="footer-socials">
        <a href="${data.github}" class="social-link" id="footer-github" title="GitHub" target="_blank" rel="noopener">⑂</a>
        <a href="${data.linkedin}" class="social-link" id="footer-linkedin" title="LinkedIn" target="_blank" rel="noopener">💼</a>
        <a href="${data.instagram}" class="social-link" id="footer-instagram" title="Instagram" target="_blank" rel="noopener">📸</a>
        <a href="mailto:${data.email}" class="social-link" id="footer-email" title="Email">📧</a>
      </div>
    </div>
  </footer>
`;

// ─── Initial Page Load Animation ──────────────────────
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// ─── Navbar scroll & Active Link effect ───────────────
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Scrolled styling
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link highlighting
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinksItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}, { passive: true });

// ─── Mobile menu ─────────────────────────────────────
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

// ─── Scroll Reveal ───────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Skill Bar Animation ─────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        const pct = fill.getAttribute('data-pct');
        setTimeout(() => {
          fill.style.width = pct + '%';
        }, 200);
      });
      // Unobserve once animated
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

// ─── Number Counter Animation ────────────────────────
const counters = document.querySelectorAll('.counter');
const speed = 200;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      
      const updateCount = () => {
        const count = +counter.innerText;
        const inc = target / speed;
        
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

counters.forEach(counter => counterObserver.observe(counter));

// ─── Typewriter Effect ───────────────────────────────
const typeWriterElement = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = data.roles[roleIndex];
  
  if (isDeleting) {
    typeWriterElement.innerText = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeWriterElement.innerText = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % data.roles.length;
    typeSpeed = 500; // Pause before typing new word
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start typing effect after page load animation
setTimeout(typeEffect, 2000);

// ─── Parallax Background Orbs ────────────────────────
const orbs = [
  document.getElementById('orb1'),
  document.getElementById('orb2'),
  document.getElementById('orb3')
];

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  if (orbs[0]) orbs[0].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  if (orbs[1]) orbs[1].style.transform = `translate(${x * -40}px, ${y * -40}px)`;
  if (orbs[2]) orbs[2].style.transform = `translate(${x * 20}px, ${y * -20}px)`;
});

// ─── 3D Tilt Effect & Spotlight for Project Cards ────
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    // Spotlight effect
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Tilt effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20; // Adjust for intensity
    const tiltY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});

// ─── Custom Cursor Logic ─────────────────────────────
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .mini-card, .contact-method');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  
  follower.style.left = `${x}px`;
  follower.style.top = `${y}px`;
});

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  follower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  follower.style.opacity = '1';
});

// ─── Contact Form Submission ─────────────────────────
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('success-msg');

  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.textContent = 'Message Sent! 🎉';
    btn.style.opacity = '1';
    successMsg.style.display = 'flex';
    e.target.reset();

    setTimeout(() => {
      btn.textContent = 'Send Message 🚀';
      btn.disabled = false;
      successMsg.style.display = 'none';
    }, 4000);
  }, 1500);
});
