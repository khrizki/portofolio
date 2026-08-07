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
    <section id="about" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold flex items-center gap-4">
            <span>Tentang Saya</span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent-primary to-accent-secondary max-w-md" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Morphing Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Morphing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary"
                animate={{
                  borderRadius: [
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                    '70% 30% 30% 70% / 70% 70% 30% 30%',
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Inner Circle */}
              <div className="absolute inset-2 bg-background-card border border-border rounded-3xl flex items-center justify-center">
                <i className="fas fa-user text-8xl text-text-muted" />
              </div>
            </div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary">{about.role}</h3>

            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-text-secondary leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 py-8"
            >
              <div className="text-center">
                <span
                  ref={years.elementRef}
                  className="block text-4xl lg:text-5xl font-bold gradient-text"
                >
                  {years.count}+
                </span>
                <span className="block text-text-muted text-sm mt-1">Tahun Pengalaman</span>
              </div>
              <div className="text-center">
                <span
                  ref={projects.elementRef}
                  className="block text-4xl lg:text-5xl font-bold gradient-text"
                >
                  {projects.count}+
                </span>
                <span className="block text-text-muted text-sm mt-1">Proyek Selesai</span>
              </div>
              <div className="text-center">
                <span
                  ref={clients.elementRef}
                  className="block text-4xl lg:text-5xl font-bold gradient-text"
                >
                  {clients.count}+
                </span>
                <span className="block text-text-muted text-sm mt-1">Klien Puas</span>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" icon={<i className="fas fa-download" />}>
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
