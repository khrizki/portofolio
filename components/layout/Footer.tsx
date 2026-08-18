'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary/75 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <a href="#home" className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary font-mono text-xs font-extrabold text-white shadow-sm" aria-label="Kembali ke beranda">KR</a>
          <div>
            <p className="text-sm font-bold text-text-primary">Khairul Rizky</p>
            <p className="text-xs text-text-muted">Designed and developed with care.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium text-text-muted md:justify-end">
            <span>Remix</span><span className="text-border-hover">•</span>
            <span>Tailwind CSS</span><span className="text-border-hover">•</span>
            <span>Framer Motion</span>
          </div>
          <p className="text-xs text-text-muted">&copy; {currentYear} Khairul Rizky. Dibuat dengan <span className="text-red-400">❤</span> dan <span className="text-amber-500">☕</span></p>
        </div>
      </div>
    </footer>
  );
}
