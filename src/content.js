export const content = {
  name: 'Your Name',
  role: 'Full‑Stack Developer',
  kicker: 'Django • DRF • React',
  tagline: 'I build fast, secure web apps with clean UX.',
  location: 'Remote / Your City',

  photo: {
    src: '/profile.jpg',
    alt: 'Appaji Reddy v',
  },

  about:
    'Full‑stack developer focused on Django (DRF) and React. I like building products that feel simple to use, are easy to maintain, and scale without drama.',

  stats: [
    { value: '2+ yrs', label: 'Experience' },
    { value: '10+', label: 'Projects shipped' },
    { value: 'API‑first', label: 'Django / DRF' },
  ],

  highlights: [
    'Django REST APIs with auth + permissions',
    'React apps with clean UI + state patterns',
    'PostgreSQL modeling, queries, performance',
    'Deployment: Docker, Nginx, CI basics',
  ],

  skills: [
    {
      title: 'Backend',
      items: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'JWT / OAuth basics'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Vite', 'JavaScript', 'React Router', 'Forms + Validation', 'Accessibility basics'],
    },
    {
      title: 'DevOps / Tools',
      items: ['Docker', 'Nginx', 'Git/GitHub', 'CI/CD basics', 'Linux', 'Testing basics'],
    },
    {
      title: 'Soft skills',
      items: ['Communication', 'Ownership', 'Problem solving', 'Fast iteration', 'Team collaboration'],
    },
  ],

  projects: [
    {
      title: 'E‑commerce Admin + API',
      year: '2026',
      description:
        'Django + DRF backend with product/catalog management, role-based access, order workflow, and clean API docs.',
      stack: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Docker'],
      links: { demo: '', code: '' },
    },
    {
      title: 'Job Board (Full‑stack)',
      year: '2026',
      description:
        'Responsive React frontend with search/filtering and a DRF API. Includes saved jobs, email notifications, and admin tools.',
      stack: ['React', 'Django', 'DRF', 'PostgreSQL'],
      links: { demo: '', code: '' },
    },
    {
      title: 'Portfolio Builder',
      year: '2025',
      description:
        'A lightweight portfolio generator with theming, sections, and export. Designed for speed and easy customization.',
      stack: ['React', 'CSS', 'Vite'],
      links: { demo: '', code: '' },
    },
  ],

  certifications: [
    { title: 'Django / DRF Certificate', issuer: 'Platform / Institute', year: '2026', credential: '' },
    { title: 'React Certificate', issuer: 'Platform / Institute', year: '2025', credential: '' },
  ],

  achievements: [
    { title: 'Built reusable API patterns', detail: 'Created a DRF starter pattern for auth, pagination, and permissions.' },
    { title: 'Improved performance', detail: 'Reduced page load by optimizing queries and compressing assets.' },
  ],

  contact: {
    email: 'you@example.com',
  },

  handle: {
    github: '@yourhandle',
    linkedin: 'in/yourhandle',
  },

  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    resume: '#',
  },
}

