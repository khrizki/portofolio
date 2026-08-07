'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Button from '@/components/ui/Button';

// Three.js Background Component
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function FloatingShape({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={position}>
        <icosahedronGeometry args={[scale, 0]} />
        <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingShape position={[-2, 1, -3]} color="#6366f1" scale={0.8} />
      <FloatingShape position={[2, -1, -2]} color="#8b5cf6" scale={0.6} />
      <FloatingShape position={[0, 2, -4]} color="#6366f1" scale={0.5} />
    </>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add AOS animation to hero elements
    const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
    heroElements?.forEach((el, index) => {
      (el as HTMLElement).setAttribute('data-aos', 'fade-up');
      (el as HTMLElement).setAttribute('data-aos-delay', `${index * 100}`);
    });
  }, []);

  const { hero } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="hero-animate text-accent-primary font-semibold text-sm tracking-widest uppercase">
              {hero.subtitle}
            </p>

            <h1 className="hero-animate space-y-2">
              <span className="block text-5xl lg:text-6xl font-bold text-text-primary">
                Halo, Saya
              </span>
              <span className="block text-5xl lg:text-6xl font-bold gradient-text">
                {hero.name}
              </span>
              <span className="block text-5xl lg:text-6xl font-bold text-text-primary">
                {hero.title}
              </span>
            </h1>

            <p className="hero-animate text-text-secondary text-lg max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <motion.div
              className="hero-animate flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button href="#projects" icon={<i className="fas fa-arrow-right" />}>
                Lihat Proyek
              </Button>
              <Button variant="secondary" href="#contact">
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-animate flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/khrizki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="w-12 h-12 bg-background-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-background-card border border-border rounded-2xl overflow-hidden shadow-glow max-w-md ml-auto">
              {/* Code Header */}
              <div className="flex gap-2 px-4 py-3 bg-background-tertiary border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code Content */}
              <pre className="p-6 font-mono text-sm leading-loose overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                  <br />
                  <span className="pl-4 text-green-400">name</span>: <span className="text-green-300">&quot;{hero.name}&quot;</span>,
                  <br />
                  <span className="pl-4 text-green-400">role</span>: <span className="text-green-300">&quot;{hero.title}&quot;</span>,
                  <br />
                  <span className="pl-4 text-green-400">skills</span>: [
                  <br />
                  <span className="pl-8 text-green-300">&quot;JavaScript&quot;</span>,
                  <br />
                  <span className="pl-8 text-green-300">&quot;React&quot;</span>,
                  <br />
                  <span className="pl-8 text-green-300">&quot;Next.js&quot;</span>,
                  <br />
                  <span className="pl-8 text-green-300">&quot;TypeScript&quot;</span>
                  <br />
                  <span className="pl-4">],
                  </span>
                  <br />
                  <span className="pl-4 text-green-400">passion</span>: <span className="text-green-300">&quot;Creating amazing things&quot;</span>
                  <br />
                  {'};'}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-sm">Scroll</span>
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-text-muted rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
