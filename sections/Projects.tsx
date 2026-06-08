'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'GSM Alarm Dialer System',
      category: 'Embedded Systems & IoT',
      description:
        'Advanced alarm dialer system with SMS alerts and automated voice call functionality. Features multi-user support, audio playback, and reliable GSM communication.',
      longDescription:
        'A production-grade alarm dialer system that enables remote monitoring and alerting through GSM communication. Supports multiple alarm scenarios, user-defined alert recipients, and customizable voice messages. Built with FreeRTOS for reliable real-time operation.',
      tech: ['ESP32', 'FreeRTOS', 'SIM900A', 'MAX98357A', 'OLED', 'Keypad'],
      features: [
        'SMS-based alerting system',
        'Automated voice calls',
        'Audio playback capability',
        'Multi-user support',
        'Real-time status monitoring',
      ],
      github: 'https://github.com/Sangeerthanan',
      live: '#',
      color: 'from-primary to-cyan-400',
      featured: true,
    },
    {
      title: 'Smart Medication Dispenser',
      category: 'IoT & Healthcare',
      description:
        'Intelligent medication management system with health monitoring integration and automated dispensing. Cloud-connected dashboard for caregiver monitoring.',
      longDescription:
        'An IoT-based medication dispenser that tracks medication schedules, monitors patient health metrics, and alerts caregivers. Features MQTT-based communication for real-time updates and Node-RED dashboard integration.',
      tech: ['ESP32', 'MQTT', 'Node-RED', 'MAX30102', 'Cloud Dashboard'],
      features: [
        'Automated medication dispensing',
        'Health data monitoring',
        'IoT dashboard integration',
        'Alert notifications',
        'Historical tracking',
      ],
      github: 'https://github.com/Sangeerthanan',
      live: '#',
      color: 'from-secondary to-purple-400',
      featured: true,
    },
    {
      title: 'Environmental Monitoring System',
      category: 'IoT & Sensors',
      description:
        'Real-time environmental parameter monitoring with cloud integration. Tracks temperature, humidity, and light levels with alert capabilities.',
      longDescription:
        'A distributed sensor network for environmental monitoring. Uses MQTT for communication, integrates with cloud dashboards, and provides real-time alerts for out-of-range values.',
      tech: ['ESP32', 'DHT11', 'LDR', 'MQTT', 'Cloud Services'],
      features: [
        'Real-time sensor monitoring',
        'Cloud data logging',
        'Alert thresholds',
        'Mobile dashboard',
        'Historical analytics',
      ],
      github: 'https://github.com/Sangeerthanan',
      live: '#',
      color: 'from-accent to-green-400',
    },
    {
      title: 'Distance Alert System',
      category: 'Embedded Systems',
      description:
        'Ultrasonic-based distance monitoring system with real-time visual and audio alerts on OLED display.',
      tech: ['ESP32', 'Ultrasonic Sensor', 'OLED', 'Audio Output'],
      features: [
        'Real-time distance measurement',
        'Visual display on OLED',
        'Audio alerts',
        'Customizable thresholds',
        'Low power operation',
      ],
      github: 'https://github.com/Sangeerthanan',
      live: '#',
      color: 'from-primary via-secondary to-accent',
    },
    {
      title: 'FPGA Digital Counters',
      category: 'FPGA & Digital Design',
      description:
        'Advanced digital counter implementation on FPGA. Demonstrates SystemVerilog design patterns and HDL best practices.',
      tech: ['SystemVerilog', 'FPGA', 'Verilog'],
      features: [
        'Synchronous counter design',
        'Multi-bit operations',
        'Reset and enable logic',
        'Parameterized modules',
        'Testbench verification',
      ],
      github: 'https://github.com/Sangeerthanan',
      live: '#',
      color: 'from-secondary to-pink-400',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            Showcase of my embedded systems and IoT engineering projects with
            detailed implementations and real-world applications.
          </p>
        </motion.div>

        {/* Featured Projects (Larger) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-2 gap-8 mb-8"
        >
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card border-primary/30 hover:border-primary/80 overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} opacity-10 rounded-lg mb-6 flex items-center justify-center group-hover:opacity-20 transition-opacity duration-300`}
              >
                <div className="text-6xl opacity-20">📱</div>
              </div>

              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-primary text-sm font-mono font-semibold mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-heading font-bold text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-text mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-accent text-sm mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r ${project.color} text-background`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 pb-6 border-t border-primary/20">
                <h4 className="font-semibold text-secondary text-sm mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg glass-effect border border-primary/30 hover:border-primary text-primary hover:text-accent transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <Code2 size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-background hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects (Smaller Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(2).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card border-primary/30 hover:border-primary/80 group"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-20 transition-opacity`}
              >
                <div className="text-4xl opacity-20">⚙️</div>
              </div>

              {/* Content */}
              <p className="text-primary text-xs font-mono font-semibold mb-1">
                {project.category}
              </p>
              <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-text text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-0.5 rounded text-xs font-mono bg-gradient-to-r ${project.color} text-background`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-0.5 rounded text-xs font-mono text-primary">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-primary/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 rounded text-center text-xs font-semibold text-primary hover:bg-primary/10 transition-all duration-300"
                  title="View GitHub repository"
                >
                  <Code2 size={14} className="mx-auto mb-1" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex-1 px-3 py-2 rounded text-center text-xs font-semibold text-accent hover:bg-accent/10 transition-all duration-300"
                  title="View live demo"
                >
                  <ArrowRight size={14} className="mx-auto mb-1" />
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
