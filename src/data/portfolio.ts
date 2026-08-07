import { PortfolioData, SkillCategory, Project, SocialLink } from '@/types';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Khairul Rizky',
    subtitle: 'Selamat Datang',
    title: 'Developer & Programmer',
    description: 'Seorang Developer/Programmer yang bersemangat menciptakan pengalaman digital yang menarik dan fungsional dengan teknologi modern.',
  },
  stats: {
    years: 3,
    projects: 50,
    clients: 30,
  },
  about: {
    role: 'Developer / Programmer',
    paragraphs: [
      'Saya Khairul Rizky, seorang developer yang berdedikasi dengan passion untuk menciptakan pengalaman digital yang luar biasa. Dengan latar belakang yang kuat dalam pengembangan software, saya menggabungkan kreativitas dengan keahlian teknis.',
      'Saya percaya bahwa kode yang baik tidak hanya berfungsi dengan baik, tetapi juga mudah dibaca, dapat di-maintain, dan scalable. Fokus saya adalah membangun aplikasi yang memberikan nilai nyata bagi pengguna.',
    ],
  },
  contact: {
    email: 'hello@example.com',
    phone: '+62 812 3456 7890',
    location: 'Jakarta, Indonesia',
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
      url: '#',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
    },
    {
      name: 'twitter',
      url: '#',
      icon: 'fab fa-twitter',
      label: 'Twitter',
    },
    {
      name: 'email',
      url: 'mailto:hello@example.com',
      icon: 'fas fa-envelope',
      label: 'Email',
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'fas fa-code',
    skills: [
      { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
      { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', level: 88, icon: 'fab fa-js' },
      { name: 'React', level: 85, icon: 'fab fa-react' },
    ],
  },
  {
    title: 'Backend',
    icon: 'fas fa-server',
    skills: [
      { name: 'Node.js', level: 82, icon: 'fab fa-node-js' },
      { name: 'Python', level: 80, icon: 'fab fa-python' },
      { name: 'MongoDB', level: 78, icon: 'fas fa-database' },
      { name: 'PostgreSQL', level: 75, icon: 'fas fa-database' },
    ],
  },
  {
    title: 'Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git', level: 90, icon: 'fab fa-git-alt' },
      { name: 'Docker', level: 75, icon: 'fab fa-docker' },
      { name: 'Figma', level: 85, icon: 'fab fa-figma' },
      { name: 'AWS', level: 70, icon: 'fas fa-cloud' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur payment gateway dan inventory management.',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    links: { github: '#', live: '#' },
    icon: 'fas fa-shopping-cart',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Aplikasi mobile untuk tracking fitness dengan fitur AI coach dan social sharing.',
    category: 'mobile',
    tags: ['React Native', 'Firebase'],
    links: { github: '#', live: '#' },
    icon: 'fas fa-mobile-alt',
  },
  {
    title: 'Project Management Tool',
    description: 'Aplikasi manajemen proyek dengan fitur drag-and-drop kanban board.',
    category: 'web',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    links: { github: '#', live: '#' },
    icon: 'fas fa-tasks',
  },
  {
    title: 'Dashboard Redesign',
    description: 'Redesign dashboard analytics dengan fokus pada user experience dan data visualization.',
    category: 'ui',
    tags: ['Figma', 'UI/UX'],
    links: { behance: '#', live: '#' },
    icon: 'fas fa-palette',
  },
  {
    title: 'Food Delivery App',
    description: 'Aplikasi delivery food dengan fitur real-time tracking dan review system.',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Firebase'],
    links: { github: '#', live: '#' },
    icon: 'fas fa-utensils',
  },
  {
    title: 'Real-time Chat App',
    description: 'Aplikasi chat real-time dengan fitur group chat, file sharing, dan video call.',
    category: 'web',
    tags: ['Socket.io', 'WebRTC', 'Redis'],
    links: { github: '#', live: '#' },
    icon: 'fas fa-comments',
  },
];

export const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
];
