'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '~/data/portfolio';
import Button from '@/components/ui/Button';

export default function Hero() {
  const { hero } = portfolioData;
  const [activeTab, setActiveTab] = useState<'code' | 'terminal'>('code');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "${hero.name}",
  role: "${hero.title}",
  skills: ["TypeScript", "React", "Next.js", "TailwindCSS"],
  passion: "Crafting modern web experiences",
  status: "Available for hire"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="section-shell relative min-h-screen flex items-center pt-28 pb-16 bg-background-primary">
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-10 -left-10 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-10 left-1/3 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Modern Grid Mask Background */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Cols 7) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8 lg:pr-8"
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
              className="space-y-3"
            >
              <h2 className="text-lg md:text-xl font-semibold text-text-secondary tracking-wide">
                Halo, saya
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary tracking-[-.06em] leading-[1.02]">
                <span className="gradient-text">
                  {hero.name}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-text-primary">
                {hero.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-text-secondary text-base sm:text-lg max-w-xl leading-8 font-medium"
            >
              {hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pt-3 flex items-center gap-3"
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
                  className="w-10 h-10 surface-card rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-primary hover:bg-accent-primary hover:shadow-glow transition-all duration-300"
                >
                  <i className={`${social.icon} text-lg`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interactive Glass IDE/Code Block (Cols 5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-[1.4rem] blur-lg opacity-25 group-hover:opacity-50 transition duration-500" />

              {/* IDE Container */}
              <div className="relative bg-[#0d1324]/95 backdrop-blur-xl border border-white/10 rounded-[1.3rem] overflow-hidden shadow-2xl">
                
                {/* IDE Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center bg-zinc-900/80 rounded-lg p-0.5 border border-white/5 text-xs">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'code'
                          ? 'bg-accent-primary text-white font-medium shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      developer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'terminal'
                          ? 'bg-accent-primary text-white font-medium shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      bash
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="text-zinc-400 hover:text-white transition-colors p-1 rounded"
                    title="Copy code"
                  >
                    <i className={copied ? 'fas fa-check text-green-400 text-xs' : 'far fa-copy text-xs'} />
                  </button>
                </div>

                {/* IDE Body */}
                <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[300px]">
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
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-blue-400">developer</span> = {'{'}
                          <br />
                          <span className="pl-4 text-zinc-400">name:</span>{' '}
                          <span className="text-emerald-300">&quot;{hero.name}&quot;</span>,
                          <br />
                          <span className="pl-4 text-zinc-400">role:</span>{' '}
                          <span className="text-emerald-300">&quot;{hero.title}&quot;</span>,
                          <br />
                          <span className="pl-4 text-zinc-400">skills:</span> [
                          <br />
                          <span className="pl-8 text-amber-300">&quot;TypeScript&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;Next.js&quot;</span>
                          <br />
                          <span className="pl-4">],</span>
                          <br />
                          <span className="pl-4 text-zinc-400">passion:</span>{' '}
                          <span className="text-emerald-300">&quot;Building impactful UI/UX&quot;</span>,
                          <br />
                          <span className="pl-4 text-zinc-400">availableForHire:</span>{' '}
                          <span className="text-orange-400">true</span>
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
                        <p className="text-zinc-500"># Run project initial check</p>
                        <p>
                          <span className="text-emerald-400">~</span> pnpm dev
                        </p>
                        <p className="text-zinc-400">ready - started server on 0.0.0.0:3000</p>
                        <p className="text-purple-400">info  - Loaded env variables from .env</p>
                        <p className="text-emerald-400">event - compiled client and server successfully in 342ms</p>
                        <p className="animate-pulse text-purple-300">▋</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer info in code card */}
                <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-500">
                  <span>UTF-8</span>
                  <span>TypeScript React</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-[11px] font-bold uppercase tracking-[.16em] text-text-muted group-hover:text-accent-secondary transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-9 border-2 border-white/20 group-hover:border-accent-secondary/50 rounded-full flex justify-center p-1 transition-colors">
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
