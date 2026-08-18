'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Button from '@/components/ui/Button';

export default function Contact() {
  const { contact, social } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await (navigator as any).clipboard?.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowNotification(true);
    setFormState({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setShowNotification(false), 4000);
  };

  return (
    <section id="contact" className="section-shell relative py-28 bg-background-primary">
      {/* Ambient Glow Background FX */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#hsl(var(--accent-primary))_1px,transparent_1px)] [background-size:16px_16px]" />
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
          {/* Badge */}
          <div className="eyebrow">
            <i className="fas fa-paper-plane text-xs text-purple-400" />
            <span>Get In Touch</span>
          </div>

          <h2 className="section-heading">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>

          <p className="section-copy max-w-2xl">
            Punya ide proyek menarik atau ingin berdiskusi lebih lanjut? Kirimkan pesan Anda dan mari ciptakan sesuatu yang luar biasa bersama.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="surface-card group relative space-y-8 overflow-hidden rounded-3xl p-8 backdrop-blur-xl lg:col-span-5"
          >
            {/* Inner Glow Decorative Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />

            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Respon Cepat (&lt; 24 jam)
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Mari Bekerja Sama!
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Saya selalu terbuka untuk kolaborasi proyek baru, peluang kerja, atau sekadar berbagi ide kreatif seputar teknologi modern.
              </p>
            </div>

            {/* Interactive Contact Tiles */}
            <div className="space-y-4">
              {/* Email Tile with Quick Copy */}
              <div
                onClick={handleCopyEmail}
                className="group/item flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-background-tertiary/35 p-4 transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shrink-0 group-hover/item:scale-110 transition-transform">
                    <i className="fas fa-envelope text-lg" />
                  </div>
                  <div>
                    <h4 className="text-text-muted text-xs font-mono uppercase tracking-wider">Email</h4>
                    <p className="text-text-primary font-medium text-sm sm:text-base group-hover/item:text-purple-300 transition-colors">
                      {contact.email}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20 opacity-80 group-hover/item:opacity-100">
                  {copiedEmail ? 'Copied! ✓' : 'Copy'}
                </span>
              </div>

              {/* Phone Tile */}
              <a
                href={`tel:${contact.phone}`}
                className="group/item flex items-center gap-4 rounded-2xl border border-border bg-background-tertiary/35 p-4 transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary/10"
              >
                <div className="w-11 h-11 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shrink-0 group-hover/item:scale-110 transition-transform">
                  <i className="fas fa-phone text-lg" />
                </div>
                <div>
                  <h4 className="text-text-muted text-xs font-mono uppercase tracking-wider">Telepon / WhatsApp</h4>
                  <p className="text-text-primary font-medium text-sm sm:text-base group-hover/item:text-purple-300 transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* Location Tile */}
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background-tertiary/35 p-4">
                <div className="w-11 h-11 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
                  <i className="fas fa-map-marker-alt text-lg" />
                </div>
                <div>
                  <h4 className="text-text-muted text-xs font-mono uppercase tracking-wider">Lokasi</h4>
                  <p className="text-text-primary font-medium text-sm sm:text-base">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-border pt-2">
              <span className="text-xs uppercase tracking-widest text-text-muted font-mono block mb-4">
                Social Media
              </span>
              <div className="flex flex-wrap gap-3">
                {social.map((socialLink) => (
                  <motion.a
                    key={socialLink.name}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background-tertiary/35 text-text-secondary transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary hover:text-white hover:shadow-glow"
                    aria-label={socialLink.label}
                  >
                    <i className={`${socialLink.icon} text-lg`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="surface-card relative rounded-3xl p-8 backdrop-blur-xl lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Input Nama */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.currentTarget.value })}
                    className="input-field peer text-sm"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute left-4 top-4 text-sm text-text-muted transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent-primary"
                  >
                    Nama Lengkap
                  </label>
                </div>

                {/* Input Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.currentTarget.value })}
                    className="input-field peer text-sm"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-4 top-4 text-sm text-text-muted transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent-primary"
                  >
                    Alamat Email
                  </label>
                </div>
              </div>

              {/* Input Subjek */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.currentTarget.value })}
                  className="input-field peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="pointer-events-none absolute left-4 top-4 text-sm text-text-muted transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent-primary"
                >
                  Subjek Pesan
                </label>
              </div>

              {/* Textarea Pesan */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.currentTarget.value })}
                  className="input-field peer resize-none text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-4 top-4 text-sm text-text-muted transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent-primary"
                >
                  Tuliskan Pesan Anda...
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <i className="fas fa-spinner animate-spin" />
                    ) : (
                      <i className="fas fa-paper-plane transition-transform group-hover:translate-x-1" />
                    )
                  }
                  className="w-full sm:w-auto shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
                >
                  {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}
                </Button>
              </div>
            </form>

            {/* Modern Toast Notification */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 backdrop-blur-md"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <i className="fas fa-check-circle text-lg" />
                  </div>
                  <div>
                    <h5 className="text-emerald-300 font-semibold text-sm">Pesan Berhasil Terkirim!</h5>
                    <p className="text-text-muted text-xs">Terima kasih telah menghubungi. Saya akan segera membalasnya.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
