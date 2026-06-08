'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, Zap } from 'lucide-react';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'Embedded Systems Engineer',
    'IoT Developer',
    'Firmware Engineer',
    'FPGA Designer',
    'Electronics Innovator',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 circuit-bg opacity-5" />

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-20 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-20 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            JEGANATHAN
            <br />
            SANGEERTHANAN
          </motion.h1>

          {/* Dynamic Title */}
          <motion.div
            variants={itemVariants}
            className="h-12 md:h-16 mb-8 flex items-center justify-center"
          >
            <motion.h2
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-semibold text-primary font-heading"
            >
              {titles[titleIndex]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-text mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Building intelligent embedded systems, industrial IoT solutions, and
            production-grade firmware that bridge hardware and software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold font-heading flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <Zap size={20} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg glass-effect border border-primary/50 text-primary font-semibold font-heading flex items-center justify-center gap-2 hover:border-primary hover:glow-effect transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/Sangeerthanan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Code2 size={24} className="text-primary" />
            </a>
            <a
              href="mailto:sangeerthananjhanan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-effect border border-primary/30 text-primary hover:border-primary hover:glow-effect transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
