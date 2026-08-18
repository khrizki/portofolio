'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';

type FilterType = 'all' | 'web' | 'mobile' | 'ui';

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Semua Proyek' },
  { value: 'web', label: 'Web App' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'ui', label: 'UI/UX Design' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Calculate project counts per category
  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projectsData.length,
    };
    projectsData.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell relative py-28 bg-background-secondary">
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center space-y-4 text-center sm:mb-14"
        >
          {/* Badge */}
          <div className="eyebrow">
            <i className="fas fa-folder-open text-xs text-purple-400" />
            <span>Featured Works</span>
          </div>

          <h2 className="section-heading">
            Portofolio <span className="gradient-text">Proyek</span>
          </h2>

          <p className="section-copy max-w-2xl">
            Jelajahi berbagai proyek web, aplikasi mobile, dan desain antarmuka yang telah saya kembangkan dengan standar kualitas terbaik.
          </p>
        </motion.div>

        {/* Filter Tabs with Animated Sliding Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="surface-card inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl p-1.5 backdrop-blur-md">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              const count = filterCounts[filter.value] || 0;

              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 select-none ${
                    isActive ? 'text-white' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {/* Sliding Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 rounded-xl bg-accent-primary shadow-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10">{filter.label}</span>
                  <span
                    className={`relative z-10 px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-background-tertiary/70 text-text-muted'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Animated Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="surface-card rounded-3xl py-20 text-center backdrop-blur-xl"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-primary/20 bg-accent-primary/10 text-accent-primary">
              <i className="fas fa-folder-open text-2xl" />
            </div>
            <p className="text-text-primary text-lg font-semibold">Tidak Ada Proyek Ditemukan</p>
            <p className="text-text-muted text-sm mt-1">Belum ada karya yang dipublikasikan dalam kategori ini.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-5 rounded-xl bg-accent-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
            >
              Tampilkan Semua Proyek
            </button>
          </motion.div>
        )}

        {/* Bottom GitHub CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="surface-card inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl px-6 py-3 backdrop-blur-md">
            <span className="text-text-secondary text-sm">
              Ingin melihat eksperimen &amp; kode sumber lainnya?
            </span>
            <a
              href="https://github.com/khrizki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent-primary transition-colors hover:text-accent-secondary"
            >
              <span>Lihat GitHub</span>
              <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
