# 🎨 Portfolio Website - Next.js Modern

Portfolio website modern dengan tema gelap, dibangun menggunakan Next.js 14, Tailwind CSS, dan berbagai library animasi profesional.

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwind-css)

## ✨ Fitur

- 🌙 **Dark Theme Modern** - Desain gelap yang elegan dan nyaman di mata
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- ⚡ **Smooth Animations** - Animasi profesional dengan GSAP dan Framer Motion
- 🎯 **Scroll Animations** - Efek animasi saat scroll dengan AOS
- 💼 **Project Showcase** - Galeri proyek dengan filter dinamis
- 📊 **Skills & Stats** - Section keahlian dengan progress bar animasi
- 📬 **Contact Form** - Form kontak dengan validasi dan notifikasi
- 🔝 **Back to Top Button** - Tombol kembali ke atas dengan animasi
- 🎨 **Gradient Accents** - Aksen gradient yang modern
- 🎮 **3D Background** - Three.js animated background di Hero section
- 🖱️ **Smooth Scrolling** - Lenis smooth scroll experience

## 🛠️ Tech Stack

### Framework & Core
- **Next.js 16.3** - React framework dengan App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixing

### Animation Libraries
| Library | Fungsi |
|---------|--------|
| **GSAP** | Animasi profesional dan performa tinggi |
| **Framer Motion** | Animasi React declarative |
| **Typed.js** | Efek mengetik |
| **AOS** | Animasi scroll trigger |
| **Three.js** | Animasi 3D untuk background |
| **Lenis** | Smooth scrolling |
| **Swiper.js** | Modern slider carousel |

### Icons & Fonts
- **Font Awesome 6** - Icons
- **Google Fonts** - Inter & Fira Code

## 📁 Struktur Project

```
portfolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Main page
│   │   └── globals.css           # Global styles
│   ├── components/              # React components
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx        # Navigation
│   │   │   ├── Footer.tsx        # Footer
│   │   │   └── Preloader.tsx     # Loading screen
│   │   ├── sections/             # Section components
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Skills.tsx        # Skills section
│   │   │   ├── Projects.tsx      # Projects section
│   │   │   └── Contact.tsx       # Contact section
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── SkillCard.tsx
│   │       ├── ProjectCard.tsx
│   │       └── BackToTop.tsx
│   ├── hooks/                    # Custom React hooks
│   │   ├── useScroll.ts          # Scroll detection
│   │   ├── useGSAP.ts            # GSAP integration
│   │   └── useTypewriter.ts      # Typed.js integration
│   ├── lib/                      # Utility functions
│   │   ├── utils.ts              # Helper functions
│   │   └── animations.ts         # Animation presets
│   ├── types/                    # TypeScript types
│   │   └── index.ts
│   └── data/                     # Data files
│       └── portfolio.ts          # Portfolio data
├── public/                       # Static assets
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🚀 Cara Menggunakan

### Prerequisites

- Node.js 18+ terinstall
- npm atau yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Server development akan berjalan di [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Kustomisasi

### Ganti Informasi Pribadi

Buka `src/data/portfolio.ts` dan ganti:

```typescript
export const portfolioData: PortfolioData = {
  hero: {
    name: 'Nama Anda',           // Ganti dengan nama Anda
    subtitle: 'Selamat Datang',
    title: 'Developer / Programmer',
    description: 'Deskripsi singkat...',
  },
  // ... update data lainnya
};
```

### Ganti Warna Tema

Buka `tailwind.config.ts` dan edit di bagian `theme.extend.colors`:

```typescript
colors: {
  accent: {
    primary: '#6366f1',    // Warna utama
    secondary: '#8b5cf6',  // Warna sekunder
  },
  // ... warna lain
}
```

### Ganti Font

Font yang digunakan:
- **Inter** - Font utama (Google Fonts)
- **Fira Code** - Font untuk code blocks

Untuk mengganti font, update di `src/app/layout.tsx`:

```typescript
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

### Update Link Sosial Media

Edit di `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  social: [
    {
      name: 'github',
      url: 'https://github.com/USERNAME',  // Ganti dengan username GitHub
      icon: 'fab fa-github',
      label: 'GitHub',
    },
    // ... update link lainnya
  ],
};
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau connect GitHub repository dengan [Vercel Dashboard](https://vercel.com/new) untuk auto-deploy.

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Other Platforms

Pastikan untuk:
1. Set build command ke `npm run build`
2. Set output directory ke `.next`
3. Enable Node.js environment

## 📦 Dependencies

### Core
- next@^16.3.0
- react@^19.2.8
- react-dom@^19.2.8
- typescript@^7.0.2

### Styling
- tailwindcss@^4.3.3
- postcss@^8.5.26
- autoprefixer@^10.5.4

### Animations
- gsap@^3.15.0
- framer-motion@^13.0.0
- typed.js@^3.0.0
- aos@^2.3.4
- three@^0.185.1
- @react-three/fiber@^9.7.0
- @react-three/drei@^10.7.8
- lenis@^1.3.26
- swiper@^14.1.0

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📱 Responsive Breakpoints

| Breakpoint | Size |
|------------|------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

## 📝 License

Website ini bebas digunakan dan dimodifikasi sesuai kebutuhan Anda.

## 👨‍💻 Author

**Khairul Rizky** - Developer & Programmer

---

**Built with ❤️ and ☕ using Next.js**
