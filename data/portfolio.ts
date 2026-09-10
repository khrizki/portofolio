import { PortfolioData, SkillCategory, Project, SocialLink } from '@/types';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Khairul Rizky',
    subtitle: 'Available for Full-Time & High-Impact Projects',
    title: 'Software Engineer & Full-Stack Architect',
    description: 'Membangun platform web dan aplikasi mobile berkinerja tinggi, terukur (scalable), dan elegan secara visual dengan standar industri global.',
  },
  stats: {
    years: 3,
    projects: 50,
    clients: 30,
  },
  about: {
    role: 'Full-Stack Software Engineer',
    paragraphs: [
      'Halo! Saya Khairul Rizky, seorang Software Engineer yang berdedikasi menciptakan produk digital modern dengan pengalaman pengguna (UX) yang mulus dan performa tinggi.',
      'Berfokus pada arsitektur perangkat lunak yang bersih (clean architecture), pengujian otomatis, serta integrasi sistem cloud, saya membantu bisnis dari ideasi hingga peluncuran sistem berskala besar.',
    ],
  },
  experience: [
    {
      period: '2023 - Present',
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Corp',
      description: 'Memimpin arsitektur microservices dan frontend web skala enterprise. Mengoptimalkan pipeline CI/CD serta performa query database yang meningkatkan efisiensi load time hingga 42%.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      period: '2021 - 2023',
      role: 'Full-Stack Developer',
      company: 'Digital Innovate ID',
      description: 'Mengembangkan aplikasi e-commerce & SaaS terintegrasi payment gateway (Midtrans/Stripe), RESTful APIs & WebSocket real-time untuk klien skala nasional dan internasional.',
      technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB', 'TailwindCSS', 'AWS'],
    },
    {
      period: '2020 - 2021',
      role: 'Frontend Developer (Intern)',
      company: 'CodeCraft Studio',
      description: 'Membangun komponen UI responsif berbasis design system Figma, memastikan aksesibilitas (a11y), cross-browser compatibility, dan animasi interaktif yang seamless.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Figma', 'Git'],
    },
  ],
  contact: {
    email: 'khrizki95@gmail.com',
    phone: '+62 813 6400 8139',
    location: 'Padang, Sumatera Barat, Indonesia (Open to Remote)',
  },
  social: [
    {
      name: 'github',
      url: 'https://github.com/khrizki',
      icon: 'fab fa-github',
      label: 'GitHub',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/khairul-rizki-6a0540323/',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
    },
    {
      name: 'email',
      url: 'mailto:khrizki95@gmail.com',
      icon: 'fas fa-envelope',
      label: 'Email',
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    icon: 'fas fa-laptop-code',
    skills: [
      { name: 'React / Next.js', level: 95, icon: 'fab fa-react' },
      { name: 'TypeScript', level: 90, icon: 'fab fa-js' },
      { name: 'Tailwind CSS', level: 95, icon: 'fab fa-css3-alt' },
      { name: 'HTML5 & Canvas', level: 98, icon: 'fab fa-html5' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: 'fas fa-server',
    skills: [
      { name: 'Node.js & Express', level: 88, icon: 'fab fa-node-js' },
      { name: 'Python & FastAPI', level: 82, icon: 'fab fa-python' },
      { name: 'PostgreSQL & SQL', level: 85, icon: 'fas fa-database' },
      { name: 'MongoDB / NoSQL', level: 84, icon: 'fas fa-leaf' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: 'fas fa-sliders',
    skills: [
      { name: 'Git & GitHub Actions', level: 92, icon: 'fab fa-git-alt' },
      { name: 'Docker & Containers', level: 80, icon: 'fab fa-docker' },
      { name: 'AWS & Cloud Services', level: 78, icon: 'fas fa-cloud' },
      { name: 'Figma & Design Systems', level: 88, icon: 'fab fa-figma' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Enterprise E-Commerce Platform',
    description: 'Platform e-commerce modern berskala penuh dengan manajemen inventaris real-time, integrasi payment gateway, dan analitik penjualan.',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    links: { github: 'https://github.com/khrizki', live: 'https://github.com/khrizki' },
    icon: 'fas fa-shopping-bag',
  },
  {
    title: 'AI-Powered Fitness Mobile App',
    description: 'Aplikasi mobile pelacak kebugaran dengan pelatih bertenaga AI, statistik latihan harian, dan fitur sosial antar pengguna.',
    category: 'mobile',
    tags: ['React Native', 'TypeScript', 'Firebase', 'TailwindCSS'],
    links: { github: 'https://github.com/khrizki', live: 'https://github.com/khrizki' },
    icon: 'fas fa-heart-pulse',
  },
  {
    title: 'Collaborative Kanban Tool',
    description: 'Aplikasi manajemen proyek kolaboratif dengan fitur drag-and-drop kanban board, aktivitas tim real-time via WebSockets.',
    category: 'web',
    tags: ['React', 'Express.js', 'Socket.io', 'MongoDB'],
    links: { github: 'https://github.com/khrizki', live: 'https://github.com/khrizki' },
    icon: 'fas fa-layer-group',
  },
  {
    title: 'Analytics Dashboard Design System',
    description: 'Design system dan perancangan antarmuka dashboard analitik data tingkat lanjut dengan grafik interaktif dan tema gelap modern.',
    category: 'ui',
    tags: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping'],
    links: { behance: 'https://github.com/khrizki', live: 'https://github.com/khrizki' },
    icon: 'fas fa-chart-pie',
  },
  {
    title: 'Food Delivery & Real-Time Tracking',
    description: 'Sistem pengiriman makanan dengan pelacakan lokasi driver berbasis peta interaktif, integrasi notifikasi push, dan review.',
    category: 'mobile',
    tags: ['React Native', 'Google Maps API', 'Node.js', 'Redis'],
    links: { github: 'https://github.com/khrizki', live: 'https://github.com/khrizki' },
    icon: 'fas fa-motorcycle',
  },
  {
    title: 'Real-Time Workspace Chat & Call',
    description: 'Platform obrolan dan kolaborasi tim dengan ruang percakapan terenkripsi, panggil suara/video WebRTC, dan berbagi berkas.',
    category: 'web',
    tags: ['WebRTC', 'Socket.io', 'Next.js', 'TailwindCSS'],
    links: { github: 'https://github.com/khrizki', live: 'https://github.com/khrizki' },
    icon: 'fas fa-comments',
  },
];

export const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
];
