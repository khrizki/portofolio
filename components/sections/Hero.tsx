'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '~/data/portfolio';
import Button from '@/components/ui/Button';

export default function Hero() {
  const { hero, stats } = portfolioData;
  const [activeTab, setActiveTab] = useState<'code' | 'terminal' | 'arch'>('code');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const engineer = {
  name: "${hero.name}",
  role: "${hero.title}",
  coreStack: ["React", "Next.js", "TypeScript", "Node.js", "Docker"],
  philosophy: "Clean code, high scalability, and seamless user experience",
  status: "Available for full-time & high-impact projects"
};`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Gagal menyalin kode:', error);
    }
  };

  const techStack = [
    { name: 'React / Next.js', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'TypeScript', icon: 'fab fa-js', color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: 'text-teal-300' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-emerald-400' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-indigo-400' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-sky-400' },
    { name: 'AWS Cloud', icon: 'fas fa-cloud', color: 'text-amber-400' },
  ];

  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center bg-background-primary pb-20 pt-28 lg:pt-36">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-[140px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-emerald-500/15 blur-[160px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-[130px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Hero Content (7 Columns) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:col-span-7 lg:pr-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <div className="eyebrow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-semibold text-text-primary">
                  {hero.subtitle}
                </span>
              </div>
            </motion.div>

            {/* Typography Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-indigo-400">
                <span className="h-0.5 w-8 bg-indigo-500" />
                Hello, I am
              </div>
              <h1 className="text-[clamp(3.2rem,7.5vw,5.8rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-text-primary">
                <span className="gradient-text">
                  {hero.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-text-secondary pt-1">
                {hero.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-text-secondary"
            >
              {hero.description}
            </motion.p>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2.5"
            >
              {[
                'Arsitektur Kode Bersih',
                'Performa & SEO Tinggi',
                'Interaksi & UI/UX Presisi',
                'Siap Kolaborasi Remote/Fulltime',
              ].map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background-card/80 px-3.5 py-1.5 text-xs font-semibold text-text-secondary shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {value}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="#projects" icon={<i className="fas fa-arrow-right" />}>
                Lihat Proyek
              </Button>
              <Button variant="secondary" href="#contact" icon={<i className="fas fa-paper-plane text-xs" />}>
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Links & Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-white/10"
            >
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-bold tracking-widest text-text-muted mr-1">
                  Connect:
                </span>
                {[
                  { icon: 'fab fa-github', href: 'https://github.com/khrizki', label: 'GitHub' },
                  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/khairul-rizki-6a0540323/', label: 'LinkedIn' },
                  { icon: 'fas fa-envelope', href: 'mailto:khrizki95@gmail.com', label: 'Email' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-background-card/80 text-text-secondary transition-all hover:border-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-indigo-500/25 shadow-sm"
                  >
                    <i className={`${social.icon} text-base`} />
                  </motion.a>
                ))}
              </div>

              {/* Quick Stat Pill */}
              <div className="flex items-center gap-6 text-xs font-semibold text-text-secondary">
                <div>
                  <span className="text-lg font-extrabold text-text-primary block leading-none">{stats.years}+ Thn</span>
                  <span className="text-[10px] text-text-muted">Pengalaman</span>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div>
                  <span className="text-lg font-extrabold text-text-primary block leading-none">{stats.projects}+</span>
                  <span className="text-[10px] text-text-muted">Proyek Selesai</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Hero Interactive IDE Window (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative group">
              {/* Glow Aura */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-20 blur-xl transition duration-500 group-hover:opacity-35" />

              {/* Window Frame */}
              <div className="surface-card relative overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl backdrop-blur-2xl">
                {/* Window Topbar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/40 px-4 py-3 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center rounded-lg border border-white/10 bg-black/40 p-0.5 text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'code'
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      engineer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'terminal'
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      build.log
                    </button>
                    <button
                      onClick={() => setActiveTab('arch')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'arch'
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      stack.json
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="rounded p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                    title="Copy Snippet"
                  >
                    <i className={copied ? 'fas fa-check text-emerald-400 text-xs' : 'far fa-copy text-xs'} />
                  </button>
                </div>

                {/* IDE Content */}
                <div className="min-h-[320px] p-6 font-mono text-xs leading-relaxed text-slate-200">
                  <AnimatePresence mode="wait">
                    {activeTab === 'code' && (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <code>
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-sky-300">engineer</span> = {'{'}
                          <br />
                          <span className="pl-4 text-slate-400">name:</span>{' '}
                          <span className="text-emerald-300">&quot;{hero.name}&quot;</span>,
                          <br />
                          <span className="pl-4 text-slate-400">title:</span>{' '}
                          <span className="text-emerald-300">&quot;Full-Stack Engineer&quot;</span>,
                          <br />
                          <span className="pl-4 text-slate-400">coreTech:</span> [
                          <br />
                          <span className="pl-8 text-amber-300">&quot;TypeScript&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;React/Next.js&quot;</span>,
                          <br />
                          <span className="pl-8 text-amber-300">&quot;Node.js&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;PostgreSQL&quot;</span>
                          <br />
                          <span className="pl-4">],</span>
                          <br />
                          <span className="pl-4 text-slate-400">focus:</span>{' '}
                          <span className="text-emerald-300">&quot;High performance &amp; clean code&quot;</span>,
                          <br />
                          <span className="pl-4 text-slate-400">availableForHire:</span>{' '}
                          <span className="text-indigo-400">true</span>
                          <br />
                          {'};'}
                        </code>
                      </motion.div>
                    )}

                    {activeTab === 'terminal' && (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 text-slate-300"
                      >
                        <p className="text-slate-500"># System diagnostic check</p>
                        <p>
                          <span className="text-emerald-400">~/khairul-rizky</span>$ pnpm run check
                        </p>
                        <p className="text-emerald-400">✔ TypeScript compilation passed (0 errors)</p>
                        <p className="text-emerald-400">✔ Unit &amp; Integration tests passed (100%)</p>
                        <p className="text-sky-300">✔ Lighthouse Performance Score: 99/100</p>
                        <p className="text-indigo-400">✔ Ready for production deployment</p>
                        <p className="animate-pulse text-indigo-400">▋</p>
                      </motion.div>
                    )}

                    {activeTab === 'arch' && (
                      <motion.div
                        key="arch"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <code>
                          {'{'}
                          <br />
                          <span className="pl-4 text-sky-300">&quot;architecture&quot;</span>: <span className="text-emerald-300">&quot;Serverless &amp; Microservices&quot;</span>,
                          <br />
                          <span className="pl-4 text-sky-300">&quot;frontend&quot;</span>: <span className="text-emerald-300">&quot;Next.js 14 / Remix / Tailwind&quot;</span>,
                          <br />
                          <span className="pl-4 text-sky-300">&quot;backend&quot;</span>: <span className="text-emerald-300">&quot;Node.js / Express / REST / GraphQL&quot;</span>,
                          <br />
                          <span className="pl-4 text-sky-300">&quot;databases&quot;</span>: <span className="text-emerald-300">&quot;PostgreSQL / MongoDB / Redis&quot;</span>,
                          <br />
                          <span className="pl-4 text-sky-300">&quot;devOps&quot;</span>: <span className="text-emerald-300">&quot;Docker / GitHub Actions / Vercel&quot;</span>
                          <br />
                          {'}'}
                        </code>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer status strip */}
                <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/60 px-4 py-2.5 text-[11px] font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Status: Online &amp; Working
                  </span>
                  <span className="text-indigo-300">Padang, ID (UTC+7)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Tech Stack Marquee / Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border overflow-hidden"
        >
          <p className="text-center text-xs font-mono font-bold uppercase tracking-widest text-text-muted mb-6">
            Teknologi Utama yang Digunakan
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex gap-4 sm:gap-6 py-2">
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="surface-card flex items-center gap-2.5 rounded-xl px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-accent-primary hover:scale-105 shrink-0 animate-pulse-glow"
                >
                  <i className={`${tech.icon} ${tech.color} text-lg`} />
                  <span className="text-xs font-semibold text-text-primary">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
