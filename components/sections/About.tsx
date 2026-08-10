'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { useCounter } from '@/hooks/useGSAP';
import Button from '@/components/ui/Button';

export default function About() {
  const { about, stats } = portfolioData;
  const years = useCounter(stats.years);
  const projects = useCounter(stats.projects);
  const clients = useCounter(stats.clients);

  return (
    <section id="about" className="relative py-28 bg-background-secondary overflow-hidden">
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <i className="fas fa-user-circle text-xs text-purple-400" />
            <span>Biography</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight">
            Tentang <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Saya</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Mengenal lebih dekat latar belakang, passion, dan pengalaman saya dalam mengembangkan perangkat lunak berkualitas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Morphing Avatar & Interactive Badges (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* Morphing Background Aura */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-60 blur-xl"
                animate={{
                  borderRadius: [
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                    '70% 30% 30% 70% / 70% 70% 30% 30%',
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Glass Card Container */}
              <div className="relative w-full h-full bg-zinc-950/80 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  <i className="fas fa-terminal" />
                </div>

                <div className="text-center">
                  <span className="text-text-primary font-bold text-lg block">
                    {portfolioData.hero.name}
                  </span>
                  <span className="text-text-muted text-xs font-mono">
                    {about.role}
                  </span>
                </div>
              </div>

              {/* Floating Badge 1 - Left Top */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-3.5 py-2 rounded-xl bg-background-card/90 border border-white/10 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-medium text-purple-300"
              >
                <i className="fas fa-code text-purple-400" />
                <span>Clean Code</span>
              </motion.div>

              {/* Floating Badge 2 - Right Bottom */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl bg-background-card/90 border border-white/10 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-medium text-emerald-300"
              >
                <i className="fas fa-lightbulb text-emerald-400" />
                <span>Problem Solver</span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right: Content & Stats (7 Cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug">
                {about.role}
              </h3>

              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-secondary text-base leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Glass Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 py-2"
            >
              {/* Stat Item 1 */}
              <div className="bg-background-card/40 border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <span
                  ref={years.elementRef}
                  className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
                >
                  {years.count}+
                </span>
                <span className="block text-text-muted text-xs sm:text-sm mt-1 font-medium">
                  Tahun Pengalaman
                </span>
              </div>

              {/* Stat Item 2 */}
              <div className="bg-background-card/40 border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <span
                  ref={projects.elementRef}
                  className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
                >
                  {projects.count}+
                </span>
                <span className="block text-text-muted text-xs sm:text-sm mt-1 font-medium">
                  Proyek Selesai
                </span>
              </div>

              {/* Stat Item 3 */}
              <div className="bg-background-card/40 border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <span
                  ref={clients.elementRef}
                  className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
                >
                  {clients.count}+
                </span>
                <span className="block text-text-muted text-xs sm:text-sm mt-1 font-medium">
                  Klien Puas
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="outline"
                icon={<i className="fas fa-download transition-transform group-hover:translate-y-0.5" />}
                className="shadow-sm hover:border-purple-500/50 hover:bg-purple-500/10"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}