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
    <section id="projects" className="relative py-28 bg-background-secondary overflow-hidden">
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
          className="flex flex-col items-center text-center mb-12 space-y-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <i className="fas fa-folder-open text-xs text-purple-400" />
            <span>Featured Works</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight">
            Portofolio <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Proyek</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
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
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-background-card/80 border border-white/10 rounded-2xl backdrop-blur-md">
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
                      className="absolute inset-0 bg-purple-600 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10">{filter.label}</span>
                  <span
                    className={`relative z-10 px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-text-muted'
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
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="text-center py-20 bg-background-card/30 rounded-3xl border border-white/5 backdrop-blur-xl"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <i className="fas fa-folder-open text-2xl" />
            </div>
            <p className="text-text-primary text-lg font-semibold">Tidak Ada Proyek Ditemukan</p>
            <p className="text-text-muted text-sm mt-1">Belum ada karya yang dipublikasikan dalam kategori ini.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-5 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-purple-500/20 transition-all"
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-background-card/60 border border-white/10 backdrop-blur-md">
            <span className="text-text-secondary text-sm">
              Ingin melihat eksperimen &amp; kode sumber lainnya?
            </span>
            <a
              href="https://github.com/khrizki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
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