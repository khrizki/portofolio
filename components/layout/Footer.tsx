'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} Khairul Rizky. Dibuat dengan{' '}
            <span className="text-red-500">❤</span> dan{' '}
            <span className="text-amber-600">☕</span>
          </p>
          <p className="text-text-muted text-sm">
            Designed & Developed by Khairul Rizky
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-text-muted">Built with</span>
            <span className="text-xs text-accent-primary">Next.js</span>
            <span className="text-text-muted">•</span>
            <span className="text-xs text-accent-secondary">Tailwind CSS</span>
            <span className="text-text-muted">•</span>
            <span className="text-xs text-green-400">GSAP</span>
            <span className="text-text-muted">•</span>
            <span className="text-xs text-blue-400">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
