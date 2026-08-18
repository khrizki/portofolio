'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const visualByCategory: Record<Project['category'], {
  label: string;
  gradient: string;
  glow: string;
  iconSurface: string;
}> = {
  web: {
    label: 'Web experience',
    gradient: 'from-indigo-500/35 via-blue-500/10 to-cyan-400/20',
    glow: 'bg-indigo-400/35',
    iconSurface: 'from-indigo-400/25 to-cyan-300/20 text-cyan-50',
  },
  mobile: {
    label: 'Mobile product',
    gradient: 'from-fuchsia-500/30 via-violet-500/15 to-indigo-400/20',
    glow: 'bg-fuchsia-400/30',
    iconSurface: 'from-fuchsia-400/25 to-violet-300/20 text-fuchsia-50',
  },
  ui: {
    label: 'Interface system',
    gradient: 'from-emerald-400/25 via-teal-500/15 to-sky-400/20',
    glow: 'bg-emerald-300/30',
    iconSurface: 'from-emerald-300/25 to-sky-300/20 text-emerald-50',
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const visual = visualByCategory[project.category];
  const links = [
    project.links.live && { href: project.links.live, icon: 'fas fa-arrow-up-right-from-square', label: 'Live site' },
    project.links.github && { href: project.links.github, icon: 'fab fa-github', label: 'Source' },
    project.links.behance && { href: project.links.behance, icon: 'fab fa-behance', label: 'Case study' },
  ].filter(Boolean) as { href: string; icon: string; label: string }[];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="surface-card group relative flex h-full flex-col overflow-hidden rounded-[1.45rem] transition-all duration-300 hover:border-accent-primary hover:shadow-glow"
      data-category={project.category}
    >
      {/* Product-like preview that works without a stock image. */}
      <div className="relative h-56 overflow-hidden border-b border-border">
        <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient}`} />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className={`absolute -right-8 -top-10 h-44 w-44 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${visual.glow}`} />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-slate-950/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-white/85 backdrop-blur-sm">
            {visual.label}
          </span>
          <span className="font-mono text-xs font-medium text-white/60">0{index + 1}</span>
        </div>

        <div className="absolute inset-x-5 bottom-0 h-32 rounded-t-2xl border border-b-0 border-white/20 bg-slate-950/30 p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-300/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
            <span className="ml-2 h-1.5 w-16 rounded-full bg-white/10" />
          </div>
          <div className="grid grid-cols-[1.2fr_.8fr] gap-2 pt-3">
            <div className="space-y-2">
              <div className="h-2.5 w-4/5 rounded-full bg-white/70" />
              <div className="h-1.5 w-full rounded-full bg-white/18" />
              <div className="h-1.5 w-3/5 rounded-full bg-white/12" />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[.08] p-2">
              <div className="h-full rounded-md bg-gradient-to-br from-white/20 to-transparent" />
            </div>
          </div>
        </div>

        <div className={`absolute bottom-5 left-8 grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-gradient-to-br shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${visual.iconSurface}`}>
          <i className={`${project.icon} text-xl`} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[.16em] text-accent-secondary">Pilihan karya</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h3 className="text-xl font-bold tracking-[-.035em] text-text-primary">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background-tertiary/60 px-2.5 py-1 text-[10px] font-bold text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-bold text-text-secondary transition-colors hover:bg-accent-primary/10 hover:text-accent-primary"
                aria-label={`${link.label}: ${project.title}`}
              >
                <i className={`${link.icon} text-xs`} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
