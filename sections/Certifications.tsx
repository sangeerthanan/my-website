'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Embedded Product Design for IoT',
      issuer: 'Professional Development',
      year: '2023',
      description: 'Comprehensive training in IoT product design, from concept to deployment.',
      skills: ['IoT Architecture', 'Product Design', 'System Integration'],
      color: 'from-primary to-cyan-400',
    },
    {
      title: 'Microcontroller Based Embedded Systems',
      issuer: 'Electronics & Computing Education',
      year: '2022',
      description: 'Advanced microcontroller programming and embedded systems design.',
      skills: ['Microcontrollers', 'C Programming', 'Real-time Systems'],
      color: 'from-secondary to-purple-400',
    },
    {
      title: 'Machine Learning for Wireless Communications',
      issuer: 'Advanced Technical Training',
      year: '2023',
      description: 'Application of machine learning techniques in wireless communication systems.',
      skills: ['ML Algorithms', 'Signal Processing', 'Wireless Systems'],
      color: 'from-accent to-green-400',
    },
    {
      title: 'Foundation of Digital Systems',
      issuer: 'Digital Design Education',
      year: '2021',
      description: 'Fundamentals of digital logic design and digital systems architecture.',
      skills: ['Digital Logic', 'Circuit Design', 'System Architecture'],
      color: 'from-primary via-secondary to-accent',
    },
    {
      title: 'SystemVerilog for ASIC/FPGA Design',
      issuer: 'HDL & FPGA Training',
      year: '2023',
      description: 'Expert-level SystemVerilog for ASIC and FPGA design and verification.',
      skills: ['SystemVerilog', 'HDL', 'FPGA Design', 'Verification'],
      color: 'from-secondary to-pink-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            Professional certifications and continuous learning achievements in embedded
            systems and advanced technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card border-primary/30 hover:border-primary/80 group overflow-hidden relative"
            >
              {/* Gradient background */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon and Year */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${cert.color} text-background`}
                  >
                    <Award size={24} />
                  </div>
                  <span className="text-primary font-mono text-sm font-semibold">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-secondary text-sm font-semibold mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-muted-text text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${cert.color} text-background opacity-80 group-hover:opacity-100 transition-opacity`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Verified Badge */}
                <div className="mt-6 pt-4 border-t border-primary/20 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-xs text-muted-text">Verified Certification</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card border-primary/30 grid md:grid-cols-3 gap-8 p-8 md:p-12"
        >
          {[
            {
              number: '5+',
              label: 'Professional Certifications',
              icon: Award,
            },
            { number: '2023', label: 'Latest Certification Year', icon: Award },
            {
              number: '100+',
              label: 'Training Hours Completed',
              icon: Award,
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="text-primary" size={32} />
                </div>
                <div className="text-gradient text-3xl font-heading font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-text">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
