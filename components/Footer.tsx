'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Code2,
      href: 'https://github.com/Sangeerthanan',
      label: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      icon: BriefcaseBusiness,
      href: 'https://linkedin.com/in/jeganathan-sangeerthanan',
      label: 'LinkedIn Profile',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:sangeerthananjhanan@gmail.com',
      label: 'Send Email',
    },
  ];

  return (
    <footer className="border-t border-primary/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-bold text-xl gradient-text mb-4">
              JEGANATHAN
            </h3>
            <p className="text-muted-text text-sm max-w-xs">
              Building intelligent embedded systems and IoT solutions that bridge hardware and software.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-text hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-effect hover:text-primary transition-all duration-300"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-text text-sm text-center md:text-left">
              © {currentYear} Jeganathan Sangeerthanan. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-text text-sm">
              Made with
              <Heart size={16} className="text-primary" />
              and
              <code className="bg-primary/10 px-2 py-1 rounded text-primary text-xs font-mono">
                Code
              </code>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
