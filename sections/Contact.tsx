'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 716 495 024',
      href: 'tel:+94716495024',
      color: 'from-primary to-cyan-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sangeerthananthanan@gmail.com',
      href: 'mailto:sangeerthananthanan@gmail.com',
      color: 'from-secondary to-purple-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sri Lanka',
      href: '#',
      color: 'from-accent to-green-400',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatusMessage('');
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to send message');
      }

      setStatus('success');
      setStatusMessage(
        result?.message || "Message sent successfully! I'll get back to you soon."
      );
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please email me directly.'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            I'd love to hear about your projects and discuss how I can contribute
            to your team. Let's connect!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="font-heading font-bold text-2xl mb-8">Contact Details</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass-card border-primary/30 hover:border-primary/80 group flex items-start gap-4 cursor-pointer"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-background flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-text text-sm font-semibold mb-1">
                      {info.label}
                    </p>
                    <p className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8 border-t border-primary/20">
              <h4 className="font-heading font-semibold text-lg mb-4">Follow</h4>
              <div className="flex gap-4">
                {[
                  {
                    label: 'GitHub',
                    href: 'https://github.com/Sangeerthanan',
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/in/jeganathan-sangeerthanan',
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass-effect border border-primary/30 hover:border-primary hover:text-primary transition-all duration-300 text-sm font-semibold"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-card border-primary/30"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-primary/20 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-muted-text/50"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-primary/20 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-muted-text/50"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-primary/20 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-muted-text/50"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-primary/20 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-muted-text/50 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400"
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-semibold">
                    {statusMessage}
                  </span>
                </motion.div>
              )}

              {status === 'error' && Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm font-semibold">
                    Please fix the errors above
                  </span>
                </motion.div>
              )}

              {status === 'error' && Object.keys(errors).length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm font-semibold">
                    {statusMessage || 'Failed to send message'}
                  </span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold font-heading flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-muted-text text-center">
                * Required fields
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
