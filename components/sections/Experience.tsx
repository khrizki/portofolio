'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section-shell relative py-28 bg-background-primary overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center space-y-4 text-center sm:mb-20"
        >
          <div className="eyebrow">
            <i className="fas fa-briefcase text-xs text-accent-primary" />
            <span>Career Path</span>
          </div>

          <h2 className="section-heading">
            Pengalaman <span className="gradient-text">Profesional</span>
          </h2>

          <p className="section-copy max-w-2xl">
            Jejak langkah perjalanan karir sebagai Software Engineer dalam merancang dan mengembangkan solusi teknologi.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:hidden" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-background-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 mt-1.5 hidden md:block" />
                  <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-background-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 mt-1.5 md:hidden" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="surface-card group relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-white/10 hover:border-accent-primary/50 transition-all duration-300 hover:shadow-glow">
                      
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono font-semibold mb-4">
                        <i className="far fa-calendar-alt text-[10px]" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                        {item.role}
                      </h3>

                      <div className="text-text-muted text-sm font-medium mb-4 flex items-center gap-2">
                        <i className="fas fa-building text-xs text-purple-400" />
                        <span>{item.company}</span>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {item.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2.5 py-1 rounded-lg bg-background-card border border-white/10 text-xs font-mono text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
