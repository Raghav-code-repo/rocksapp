import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

// Category color configurations for vibrant, color-full UI
const CATEGORY_COLORS: Record<string, { badge: string; dot: string; glow: string }> = {
  'AI & Generative AI': {
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30',
    dot: 'bg-violet-500 shadow-violet-500/50',
    glow: 'group-hover:border-violet-500/40 dark:group-hover:border-violet-400/40',
  },
  'Enterprise Software': {
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    dot: 'bg-blue-500 shadow-blue-500/50',
    glow: 'group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40',
  },
  'Web Applications': {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    dot: 'bg-emerald-500 shadow-emerald-500/50',
    glow: 'group-hover:border-emerald-500/40 dark:group-hover:border-emerald-400/40',
  },
  'Mobile Applications': {
    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    dot: 'bg-rose-500 shadow-rose-500/50',
    glow: 'group-hover:border-rose-500/40 dark:group-hover:border-rose-400/40',
  },
  'Automation': {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    dot: 'bg-amber-500 shadow-amber-500/50',
    glow: 'group-hover:border-amber-500/40 dark:group-hover:border-amber-400/40',
  },
  'Data & Analytics': {
    badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    dot: 'bg-cyan-500 shadow-cyan-500/50',
    glow: 'group-hover:border-cyan-500/40 dark:group-hover:border-cyan-400/40',
  },
  'Cloud & DevOps': {
    badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    dot: 'bg-indigo-500 shadow-indigo-500/50',
    glow: 'group-hover:border-indigo-500/40 dark:group-hover:border-indigo-400/40',
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featuredLayout = false }) => {
  const [imageError, setImageError] = useState(false);
  const colorScheme = CATEGORY_COLORS[project.category] || {
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30',
    dot: 'bg-violet-500 shadow-violet-500/50',
    glow: 'group-hover:border-violet-500/40 dark:group-hover:border-violet-400/40',
  };

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-cyan-500/10 ${colorScheme.glow} ${
        featuredLayout ? 'lg:grid lg:grid-cols-12 lg:gap-8 items-center' : ''
      }`}
    >
      {/* Top Colorful Accent Strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Media Container */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 ${
          featuredLayout ? 'lg:col-span-7 h-64 sm:h-80 lg:h-96' : 'h-52 sm:h-60'
        }`}
      >
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-violet-900/10 via-fuchsia-900/10 to-cyan-900/10 text-neutral-400 dark:text-neutral-500">
            <Layers className="w-10 h-10 mb-3 text-violet-500 opacity-60" />
            <span className="text-xs uppercase tracking-wider font-mono font-medium text-violet-600 dark:text-cyan-400">
              {project.category}
            </span>
          </div>
        )}

        {/* Featured Ribbon Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/40">
              <Sparkles className="w-2.5 h-2.5" />
              FEATURED
            </span>
          </div>
        )}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
      </div>

      {/* Content Container */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
          featuredLayout ? 'lg:col-span-5' : ''
        }`}
      >
        <div>
          {/* Colorful Category & Status Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${colorScheme.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${colorScheme.dot} shadow-sm`} />
              {project.category}
            </span>

            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              {project.status}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:via-fuchsia-600 group-hover:to-cyan-500 transition-all duration-300">
            <Link to={`/projects/${project.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
          {/* Colorful Tech Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60 group-hover:border-violet-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-mono text-neutral-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
            <span>Explore Case Study</span>
            <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-gradient-to-tr group-hover:from-violet-600 group-hover:to-cyan-400 group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
