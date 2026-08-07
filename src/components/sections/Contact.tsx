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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowNotification(true);
    setFormState({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setShowNotification(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold flex items-center gap-4">
            <span>Hubungi Saya</span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent-primary to-accent-secondary max-w-md" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Mari Bekerja Sama!
              </h3>
              <p className="text-text-secondary">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
                atau kesempatan untuk menjadi bagian dari visi Anda.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-accent-primary shrink-0">
                  <i className="fas fa-envelope text-xl" />
                </div>
                <div>
                  <h4 className="text-text-muted text-sm mb-1">Email</h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-text-primary hover:text-accent-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-accent-primary shrink-0">
                  <i className="fas fa-phone text-xl" />
                </div>
                <div>
                  <h4 className="text-text-muted text-sm mb-1">Telepon</h4>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-text-primary hover:text-accent-primary transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-accent-primary shrink-0">
                  <i className="fas fa-map-marker-alt text-xl" />
                </div>
                <div>
                  <h4 className="text-text-muted text-sm mb-1">Lokasi</h4>
                  <span className="text-text-primary">{contact.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {social.map((socialLink) => (
                <a
                  key={socialLink.name}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                  aria-label={socialLink.label}
                >
                  <i className={`${socialLink.icon} text-xl`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-text-muted pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:bg-background-primary peer-focus:px-2 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:bg-background-primary peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-xs"
                  >
                    Nama Lengkap
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-text-muted pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:bg-background-primary peer-focus:px-2 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:bg-background-primary peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-xs"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all peer"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-text-muted pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:bg-background-primary peer-focus:px-2 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:bg-background-primary peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-xs"
                >
                  Subjek
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all resize-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-text-muted pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:bg-background-primary peer-focus:px-2 peer-focus:text-xs peer-focus:text-accent-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:bg-background-primary peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-xs"
                >
                  Pesan
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                icon={<i className="fas fa-paper-plane" />}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
            </form>

            {/* Success Notification */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl flex items-center gap-3"
                >
                  <i className="fas fa-check-circle text-success text-xl" />
                  <span className="text-text-primary">
                    Pesan berhasil dikirim! Terima kasih telah menghubungi.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
