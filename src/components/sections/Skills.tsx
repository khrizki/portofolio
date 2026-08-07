'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolio';
import SkillCard from '@/components/ui/SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold flex items-center gap-4">
            <span>Keahlian</span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent-primary to-accent-secondary max-w-md" />
          </h2>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <i className={`${category.icon} text-accent-primary`} />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
