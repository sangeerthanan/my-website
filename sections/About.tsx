'use client';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Code } from 'lucide-react';

export default function About() {
  const timelineItems = [
    {
      year: 'September 2025 - Present',
      title: 'Associate Engineer – R&D Electronics & Embedded Systems',
      company: 'Oculus International (Pvt) Ltd',
      description:
        'Leading embedded systems development and IoT solution design. Specializing in ESP32, FreeRTOS, GSM communication, and firmware optimization.',
      icon: Briefcase,
    },
    {
      year: ' February 2025 - August 2025',
      title: 'Engineer Intern – Fire Alarm Systems',
      company: 'Diesel and Motor Engineering PLC',
      description:
        'Worked on fire alarm system commissioning, configuration, and troubleshooting. Gained hands-on experience in industrial automation systems.',
      icon: Briefcase,
    },
    {
      year: '2021',
      title: 'NDT in Electronic & Telecommunication Engineering Technology',
      company: 'Institute of Technology, University of Moratuwa',
      description:
        'Comprehensive training in embedded systems, digital electronics, and communication technologies. Foundation in FPGA design and PCB development.',
      icon: BookOpen,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            Passionate Embedded Systems Engineer specializing in ESP32, FreeRTOS,
            GSM Communication, FPGA Design, PCB Design, and Industrial Automation.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-[9px] shadow-glow" />

                {/* Content */}
                <div className="glass-card">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-primary font-mono font-semibold">
                          {item.year}
                        </p>
                        <h3 className="font-heading font-bold text-xl text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-secondary font-semibold mb-2">
                    {item.company}
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card border-primary/30"
        >
          <h3 className="font-heading font-bold text-2xl mb-4 flex items-center gap-3">
            <Code className="text-primary" />
            Professional Summary
          </h3>
          <p className="text-muted-text leading-relaxed mb-4">
            With a strong foundation in embedded systems and electronics engineering,
            I specialize in designing and implementing production-grade firmware solutions
            that seamlessly integrate hardware and software. My expertise spans across
            microcontroller programming, real-time operating systems, PCB design, and IoT
            applications.
          </p>
          <p className="text-muted-text leading-relaxed">
            I am passionate about solving complex engineering challenges through innovative
            embedded systems design, with a focus on performance optimization, system
            integration, and delivering robust solutions for industrial automation and IoT
            applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
