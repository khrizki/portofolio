'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/data/portfolio';
import SkillCard from '@/components/ui/SkillCard';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract all categories for filter tabs
  const categories = useMemo(() => {
    return ['all', ...skillsData.map((cat) => cat.title)];
  }, []);

  // Filter categories & skills based on tab and search query
  const filteredData = useMemo(() => {
    return skillsData
      .map((cat) => {
        // If specific category selected and doesn't match, return null
        if (selectedCategory !== 'all' && cat.title.toLowerCase() !== selectedCategory.toLowerCase()) {
          return null;
        }

        // Filter skills inside category based on search query
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (matchingSkills.length === 0) return null;

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  // Total count of visible skills
  const totalVisibleSkills = useMemo(() => {
    return filteredData.reduce((acc, cat) => acc + (cat?.skills.length || 0), 0);
  }, [filteredData]);

  // Framer Motion Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="section-shell relative py-28 bg-background-primary">
      {/* Background Lighting / Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#hsl(var(--accent-primary))_1px,transparent_1px)] [background-size:16px_16px]" />
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
          <div className="eyebrow">
            <i className="fas fa-code text-xs text-purple-400" />
            <span>Tech Stack & Competencies</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-[-.05em]">
            Keahlian <span className="gradient-text">&amp; Teknologi</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Kumpulan bahasa pemrograman, framework, dan tools yang saya gunakan untuk membangun solusi digital yang responsif, cepat, dan terstruktur.
          </p>
        </motion.div>

        {/* Filter Bar & Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-background-card/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat.toLowerCase())}  
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 capitalize ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat === 'all' ? 'Semua Skill' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari skill..."
              className="w-full bg-background-card/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 backdrop-blur-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white text-xs"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Dynamic Skill Categories Render */}
        <AnimatePresence mode="wait">
          {filteredData.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {filteredData.map((category) => (
                <div
                  key={category!.title}
                  className="bg-background-card/30 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl"
                >
                  {/* Category Section Title */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-3">
                      <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 text-lg">
                        <i className={category!.icon} />
                      </span>
                      {category!.title}
                    </h3>
                    <span className="text-xs text-text-muted font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {category!.skills.length} Tech
                    </span>
                  </div>

                  {/* Skills Grid with Stagger Effect */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                  >
                    {category!.skills.map((skill, skillIndex) => (
                      <motion.div key={skill.name} variants={itemVariants}>
                        <SkillCard skill={skill} index={skillIndex} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Empty State when Search/Filter returns no result */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-background-card/20 rounded-3xl border border-white/5"
            >
              <i className="fas fa-search-minus text-4xl text-text-muted mb-4 block" />
              <p className="text-text-secondary text-lg font-medium">Skill tidak ditemukan</p>
              <p className="text-text-muted text-sm mt-1">Coba kata kunci lain atau ubah filter kategori.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-xl text-xs font-semibold hover:bg-purple-600/30 transition-all"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Counter Badge */}
        {filteredData.length > 0 && (
          <div className="mt-8 text-center text-xs text-text-muted font-mono">
            Menampilkan <span className="text-purple-400 font-bold">{totalVisibleSkills}</span> teknologi
          </div>
        )}
      </div>
    </section>
  );
}
