'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FolderGit, GitFork, Star } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
  updated_at: string;
}

export default function Github() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/Sangeerthanan/repos?sort=stars&order=desc&per_page=6'
        );

        if (!response.ok) throw new Error('Failed to fetch repositories');

        const data = await response.json();

        const formattedRepos: Repository[] = data.map(
          (repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            updated_at: repo.updated_at,
          })
        );

        setRepos(formattedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string | null): string => {
    const colors: Record<string, string> = {
      C: 'bg-blue-600',
      'C++': 'bg-blue-700',
      Python: 'bg-yellow-600',
      SystemVerilog: 'bg-orange-600',
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      HTML: 'bg-red-600',
      CSS: 'bg-pink-600',
    };
    return colors[language || ''] || 'bg-gray-600';
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
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">Open Source Projects</h2>
          <p className="text-center text-muted-text max-w-3xl mx-auto text-lg">
            Featured repositories from my GitHub. Contributing to the open-source community
            and sharing knowledge.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card h-64 animate-pulse" />
            ))}
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card border-red-500/50 text-center py-12"
          >
            <p className="text-red-400 mb-4">
              Unable to fetch repositories at the moment
            </p>
            <p className="text-muted-text text-sm">
              Visit my{' '}
              <a
                href="https://github.com/Sangeerthanan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                GitHub profile
              </a>{' '}
              to see all projects
            </p>
          </motion.div>
        )}

        {/* Repositories Grid */}
        {!loading && !error && repos.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card border-primary/30 hover:border-primary/80 flex flex-col group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FolderGit size={24} className="text-primary" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-1 text-yellow-400 text-sm font-semibold"
                  >
                    <Star size={16} fill="currentColor" />
                    {repo.stars}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {repo.name}
                </h3>

                {/* Description */}
                <p className="text-muted-text text-sm mb-4 flex-grow line-clamp-3">
                  {repo.description || 'No description provided'}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    {/* Language */}
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getLanguageColor(
                            repo.language
                          )}`}
                        />
                        <span className="text-xs font-mono text-muted-text">
                          {repo.language}
                        </span>
                      </div>
                    )}

                    {/* Forks */}
                    <div className="flex items-center gap-1 text-muted-text text-xs">
                      <GitFork size={12} />
                      {repo.forks}
                    </div>
                  </div>

                  {/* Updated */}
                  <div className="flex items-center gap-1 text-muted-text text-xs">
                    <Calendar size={12} />
                    Updated{' '}
                    {new Date(repo.updated_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* View More Button */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Sangeerthanan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold font-heading hover:shadow-glow transition-all duration-300"
            >
              <FolderGit size={20} />
              View All Repositories
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
