'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';

type FilterType = 'all' | 'web' | 'mobile' | 'ui';

const filters = [
  { value: 'all', label: 'Semua' },
  { value: 'web', label: 'Web App' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ui', label: 'UI/UX' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold flex items-center gap-4">
            <span>Proyek</span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent-primary to-accent-secondary max-w-md" />
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as FilterType)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-accent-primary text-white shadow-lg'
                  : 'bg-background-card text-text-secondary border border-border hover:border-border-hover'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-muted text-lg">Tidak ada proyek ditemukan.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
