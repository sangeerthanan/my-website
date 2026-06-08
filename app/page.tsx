'use client';

import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Github from '@/sections/Github';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <AnimatedBackground />
      
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <About />
        </Suspense>
      </section>

      <section id="skills" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <Skills />
        </Suspense>
      </section>

      <section id="experience" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <Experience />
        </Suspense>
      </section>

      <section id="projects" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <Projects />
        </Suspense>
      </section>

      <section id="github" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <Github />
        </Suspense>
      </section>

      <section id="certifications" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <Certifications />
        </Suspense>
      </section>

      <section id="contact" className="py-20">
        <Suspense fallback={<div className="h-screen" />}>
          <Contact />
        </Suspense>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
