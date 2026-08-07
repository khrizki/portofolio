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
      className="bg-background-card border border-border rounded-2xl overflow-hidden group hover:border-accent-primary hover:shadow-glow transition-all duration-300"
      data-category={project.category}
    >
      {/* Project Image */}
      <div className="h-52 bg-background-tertiary flex items-center justify-center relative overflow-hidden">
        <i className={`${project.icon} text-6xl text-text-muted group-hover:scale-110 transition-transform duration-300`} />

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
        <h3 className="text-xl font-semibold text-text-primary mb-2">
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
              className="px-3 py-1 bg-background-tertiary text-accent-primary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
