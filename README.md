# 🎨 Portofolio Website Modern

Website portofolio modern dengan tema gelap yang dibangun menggunakan HTML5, CSS3, dan JavaScript ES6+.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Fitur

- 🌙 **Dark Theme Modern** - Desain gelap yang elegan dan nyaman di mata
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- ⚡ **Smooth Animations** - Animasi yang smooth dan performa tinggi
- 🎯 **Scroll Animations** - Efek animasi saat scroll
- 💼 **Project Showcase** - Galeri proyek dengan filter
- 📊 **Skills & Stats** - Section keahlian dan statistik dengan animasi
- 📬 **Contact Form** - Form kontak dengan validasi
- 🔝 **Back to Top Button** - Tombol kembali ke atas
- ⌨️ **Typing Effect** - Efek mengetik pada hero section
- 🎨 **Gradient Accents** - Aksen gradient yang modern

## 📁 Struktur File

```
portfolio/
├── index.html      # Halaman utama
├── styles.css      # Stylesheet
├── script.js       # JavaScript
└── README.md       # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Clone atau Download

Download seluruh folder portfolio ke komputer Anda.

### 2. Buka File

Buka file `index.html` di browser Anda. Klik dua kali pada file atau:

```bash
# Jika menggunakan terminal
open index.html
```

### 3. Deploy ke Hosting

Anda bisa deploy ke berbagai platform gratis:

#### Netlify
1. Drag & drop folder `portfolio` ke [Netlify Drop](https://app.netlify.com/drop)
2. Website Anda akan langsung online!

#### Vercel
```bash
npm install -g vercel
vercel
```

#### GitHub Pages
1. Upload folder ke GitHub repository
2. Aktifkan GitHub Pages di settings
3. Pilih branch main

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

## 🎨 Kustomisasi

### Ganti Informasi Pribadi

Buka `index.html` dan ganti:

- **Nama**: Cari teks "Developer" dan ganti dengan nama Anda
- **Tentang Saya**: Edit bagian `<section id="about">`
- **Keahlian**: Tambah/hapus skill di `<section id="skills">`
- **Proyek**: Update daftar proyek di `<section id="projects">`
- **Kontak**: Ganti email dan nomor telepon di `<section id="contact">`

### Ganti Warna Tema

Buka `styles.css` dan edit CSS Variables di bagian `:root`:

```css
:root {
    --accent-primary: #6366f1;    /* Warna utama */
    --accent-secondary: #8b5cf6;  /* Warna sekunder */
    --bg-primary: #0a0a0f;        /* Background utama */
    --bg-secondary: #12121a;      /* Background sekunder */
    /* ... */
}
```

### Ganti Font

Font yang digunakan:
- **Inter** - Font utama (Google Fonts)
- **Fira Code** - Font untuk code block (Google Fonts)

Ganti di bagian `<head>` pada `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=FONT_ANDA&display=swap" rel="stylesheet">
```

Dan di `styles.css`:

```css
:root {
    --font-main: 'FONT_ANDA', sans-serif;
}
```

### Update Link Sosial Media

Cari link sosial media di `index.html` dan ganti `#` dengan link Anda:

```html
<a href="https://github.com/USERNAME" class="social-link" aria-label="GitHub">
    <i class="fab fa-github"></i>
</a>
```

## 📦 Dependencies

Website ini menggunakan CDN untuk:

- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Inter & Fira Code

Semua dependencies di-load via CDN, tidak perlu npm install.

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance

- Optimized CSS dengan CSS Variables
- Vanilla JavaScript tanpa framework berat
- Smooth animations dengan GPU acceleration
- Lazy loading support untuk images

## 🔧 Fitur JavaScript

### Navigation
- Sticky navbar dengan scroll detection
- Smooth scroll ke sections
- Active link highlight
- Mobile menu hamburger

### Animations
- Preloader saat load
- Scroll-triggered animations
- Skills progress bar animation
- Stats counter animation
- Parallax effect pada hero shapes

### Projects
- Filter proyek berdasarkan kategori
- Smooth show/hide animations

### Contact Form
- Form validation
- Loading state
- Success notification

### Extras
- Typing effect pada hero
- Custom cursor (optional - uncomment in script.js)
- Back to top button
- Scroll progress indicator

## 🎯 Roadmap

- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Blog section
- [ ] Testimonials section
- [ ] PWA Support
- [ ] Image gallery
- [ ] Video embed support

## 📝 License

Website ini bebas digunakan dan dimodifikasi sesuai kebutuhan Anda.

## 👨‍💻 Author

Created by **Your Name** - Dibuat dengan ❤️ dan ☕

---

**Happy Coding!** 🚀
