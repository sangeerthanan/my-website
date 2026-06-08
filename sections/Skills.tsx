'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  Radio,
  Wrench,
  Zap,
  AlertCircle,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Microcontrollers',
      icon: Cpu,
      skills: ['ESP32', 'STM32', 'Arduino', 'FreeRTOS'],
      color: 'from-primary to-cyan-400',
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Python', 'SystemVerilog'],
      color: 'from-secondary to-purple-400',
    },
    {
      title: 'Communication Protocols',
      icon: Radio,
      skills: ['MQTT', 'UART', 'SPI', 'I2C', 'WiFi', 'Bluetooth', 'GSM'],
      color: 'from-accent to-green-400',
    },
    {
      title: 'Design & Tools',
      icon: Wrench,
      skills: ['KiCad', 'STM32CubeIDE', 'Arduino IDE', 'Node-RED', 'Wokwi', 'AutoCAD'],
      color: 'from-primary via-secondary to-accent',
    },
    {
      title: 'Core Competencies',
      icon: Zap,
      skills: [
        'PCB Design',
        'Hardware Debugging',
        'Firmware Development',
        'System Integration',
        'Prototyping',
      ],
      color: 'from-secondary to-pink-400',
    },
    {
      title: 'Advanced Topics',
      icon: AlertCircle,
      skills: [
        'FPGA Design',
        'Real-time Systems',
        'Industrial IoT',
        'Signal Processing',
        'Power Management',
      ],
      color: 'from-accent to-blue-400',
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
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            A comprehensive toolkit spanning embedded systems, firmware development, and
            hardware design.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group glass-card hover:border-primary/80 cursor-pointer overflow-hidden relative"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${category.color}`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-background`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                        <span className="text-muted-text text-sm">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Proficiency Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card border-primary/30 max-w-2xl mx-auto"
        >
          <h3 className="font-heading font-bold text-xl mb-6">
            Proficiency Levels
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Expert', percentage: 90, color: 'from-primary to-accent' },
              {
                label: 'Intermediate',
                percentage: 75,
                color: 'from-secondary to-primary',
              },
              { label: 'Learning', percentage: 60, color: 'from-accent to-secondary' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-text font-semibold">{item.label}</span>
                  <span className="text-primary text-sm font-mono">
                    {item.percentage}%
                  </span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
