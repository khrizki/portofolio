'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="surface-card rounded-[1.35rem] overflow-hidden group hover:border-accent-primary hover:shadow-glow transition-all duration-300"
      data-category={project.category}
    >
      {/* Project Image */}
      <div className="h-52 bg-background-tertiary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,215,189,.3),transparent_42%),radial-gradient(circle_at_20%_10%,rgba(117,103,248,.42),transparent_48%)] group-hover:scale-110 transition-transform duration-700" />
        <span className="absolute top-4 left-4 rounded-full bg-slate-950/35 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/75 border border-white/10">{project.category}</span>
        <i className={`${project.icon} relative text-5xl text-white/80 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-background-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center text-white hover:bg-accent-secondary transition-colors"
              aria-label="View live"
            >
              <i className="fas fa-external-link-alt" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center text-white hover:bg-accent-secondary transition-colors"
              aria-label="View code"
            >
              <i className="fab fa-github" />
            </a>
          )}
          {project.links.behance && (
            <a
              href={project.links.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center text-white hover:bg-accent-secondary transition-colors"
              aria-label="View on Behance"
            >
              <i className="fab fa-behance" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-background-tertiary text-accent-primary text-[11px] font-bold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
