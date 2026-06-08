'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      position: 'Associate Engineer – R&D Electronics & Embedded Systems',
      company: 'Oculus International (Pvt) Ltd',
      period: '2023 - Present',
      location: 'Sri Lanka',
      achievements: [
        'GSM Alarm Dialer Development with ESP32 and SIM900A',
        'Implemented FreeRTOS multitasking systems',
        'Audio playback systems integration with MAX98357A',
        'Hardware testing and firmware optimization',
        'PCB design and circuit debugging',
        'Industrial automation solutions',
      ],
    },
    {
      position: 'Engineer Intern – Fire Alarm Systems',
      company: 'Diesel and Motor Engineering PLC',
      period: '2022',
      location: 'Sri Lanka',
      achievements: [
        'Fire alarm system commissioning and deployment',
        'Desigo CC configuration and management',
        'On-site system testing and troubleshooting',
        'Technical documentation and reporting',
        'Hands-on experience with industrial control systems',
        'Problem-solving in real-world applications',
      ],
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
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            Building innovative embedded systems and IoT solutions across various
            industries.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card border-primary/30 hover:border-primary/80 group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-primary/20">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                  </div>
                  <p className="text-secondary font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-muted-text text-sm">
                    {exp.location}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-primary font-mono text-sm font-semibold">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-accent mb-4">
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: achIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-primary flex-shrink-0 mt-1"
                      />
                      <span className="text-muted-text text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
