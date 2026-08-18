'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '~/data/portfolio';
import Button from '@/components/ui/Button';

export default function Hero() {
  const { hero, stats } = portfolioData;
  const [activeTab, setActiveTab] = useState<'code' | 'terminal'>('code');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "${hero.name}",
  role: "${hero.title}",
  skills: ["TypeScript", "React", "Next.js", "TailwindCSS"],
  passion: "Crafting modern web experiences",
  status: "Available for hire"
};`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Tidak dapat menyalin kode:', error);
    }
  };

  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center bg-background-primary pb-24 pt-32 lg:pt-36">
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -left-20 -top-24 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[130px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-500/15 blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Modern Grid Mask Background */}
        <div
          className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_45%,#000_60%,transparent_100%)]"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Content (Cols 7) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          className="space-y-8 lg:col-span-7 lg:pr-10"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <div className="eyebrow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>
                  {hero.subtitle || 'Available for projects'}
                </span>
              </div>
            </motion.div>

            {/* Typography Section */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-sm font-semibold tracking-wide text-text-secondary">
                <span className="h-px w-8 bg-accent-secondary/70" />
                Halo, saya
              </div>
              <h1 className="max-w-3xl text-[clamp(3.4rem,8vw,6.8rem)] font-extrabold leading-[.93] tracking-[-.075em] text-text-primary">
                <span className="gradient-text">
                  {hero.name}
                </span>
              </h1>
              <p className="text-xl font-bold tracking-[-.035em] text-text-primary sm:text-2xl">
                {hero.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-base font-medium leading-8 text-text-secondary sm:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
            >
              {['UI yang bermakna', 'Kode yang terukur', 'Kolaborasi terbuka'].map((value) => (
                <span key={value} className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card/55 px-3 py-1.5 text-xs font-semibold text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                  {value}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button href="#projects" icon={<i className="fas fa-arrow-right transition-transform group-hover:translate-x-1" />}>
                  Lihat Proyek
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" href="#contact">
                  Hubungi Saya
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <span className="text-xs uppercase tracking-widest text-text-muted font-semibold mr-2">
                Hubungkan:
              </span>
              {[
                { icon: 'fab fa-github', href: 'https://github.com/khrizki', label: 'GitHub' },
                { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/khairul-rizki-6a0540323/', label: 'LinkedIn' },
                { icon: 'fas fa-envelope', href: 'mailto:khrizki95@gmail.com', label: 'Email' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="surface-card flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary hover:text-white hover:shadow-glow"
                >
                  <i className={`${social.icon} text-lg`} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid max-w-xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-background-card/35 px-2 py-3 backdrop-blur-sm"
            >
              {[
                { value: `${stats.years}+`, label: 'Tahun berkarya' },
                { value: `${stats.projects}+`, label: 'Proyek selesai' },
                { value: `${stats.clients}+`, label: 'Klien percaya' },
              ].map((item) => (
                <div key={item.label} className="px-3 text-center sm:px-4">
                  <span className="block text-lg font-extrabold tracking-[-.05em] text-text-primary sm:text-xl">{item.value}</span>
                  <span className="mt-0.5 block text-[10px] font-semibold leading-tight text-text-muted sm:text-[11px]">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interactive Glass IDE/Code Block (Cols 5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative group">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 rounded-[1.65rem] bg-gradient-to-br from-accent-primary via-accent-tertiary to-accent-secondary opacity-25 blur-xl transition duration-500 group-hover:opacity-45" />

              {/* IDE Container */}
              <div className="surface-card relative overflow-hidden rounded-[1.55rem] shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                
                {/* IDE Header */}
                <div className="flex items-center justify-between border-b border-border bg-white/[0.025] px-4 py-3 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center rounded-lg border border-white/10 bg-black/20 p-0.5 text-xs">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'code'
                          ? 'bg-accent-primary text-white font-medium shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      profile.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'terminal'
                          ? 'bg-accent-primary text-white font-medium shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      build log
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="rounded p-1 text-zinc-400 transition-colors hover:text-white"
                    title="Copy code"
                  >
                    <i className={copied ? 'fas fa-check text-green-400 text-xs' : 'far fa-copy text-xs'} />
                  </button>
                </div>

                {/* IDE Body */}
                <div className="min-h-[300px] overflow-x-auto p-6 font-mono text-xs leading-relaxed sm:text-sm">
                  <AnimatePresence mode="wait">
                    {activeTab === 'code' ? (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <code>
                          <span className="text-violet-300">const</span>{' '}
                          <span className="text-sky-300">developer</span> = {'{'}
                          <br />
                          <span className="pl-4 text-slate-400">name:</span>{' '}
                          <span className="text-emerald-300">&quot;{hero.name}&quot;</span>,
                          <br />
                          <span className="pl-4 text-slate-400">role:</span>{' '}
                          <span className="text-emerald-300">&quot;{hero.title}&quot;</span>,
                          <br />
                          <span className="pl-4 text-slate-400">skills:</span> [
                          <br />
                          <span className="pl-8 text-amber-300">&quot;TypeScript&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;Next.js&quot;</span>
                          <br />
                          <span className="pl-4">],</span>
                          <br />
                          <span className="pl-4 text-slate-400">passion:</span>{' '}
                          <span className="text-emerald-300">&quot;Building impactful UI/UX&quot;</span>,
                          <br />
                          <span className="pl-4 text-slate-400">availableForHire:</span>{' '}
                          <span className="text-amber-300">true</span>
                          <br />
                          {'};'}
                        </code>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 text-zinc-300"
                      >
                        <p className="text-zinc-500"># starting a focused work session</p>
                        <p>
                          <span className="text-emerald-400">~</span> npm run dev
                        </p>
                        <p className="text-zinc-400">ready — ideas turned into interface</p>
                        <p className="text-violet-300">info  — clarity, speed, and care included</p>
                        <p className="text-emerald-400">event — ready to build something useful</p>
                        <p className="animate-pulse text-violet-300">▋</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer info in code card */}
                <div className="flex items-center justify-between border-t border-border bg-white/[0.02] px-4 py-2 text-[10px] text-zinc-500">
                  <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to collaborate</span>
                  <span>TypeScript · React</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 md:flex"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-[11px] font-bold uppercase tracking-[.16em] text-text-muted group-hover:text-accent-secondary transition-colors">
          Scroll Down
        </span>
        <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/20 p-1 transition-colors group-hover:border-accent-secondary/50">
          <motion.div
            className="w-1 h-2 bg-accent-secondary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
