import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowUpRight, AlertTriangle, Layers, Cpu, Server, BarChart3, Cloud, RefreshCw, Sparkles } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { SectionHeader } from '../components/common/SectionHeader';
import { PageTransition } from '../components/common/PageTransition';

const SERVICE_CONFIGS: Record<string, { icon: React.ReactNode; gradient: string; badge: string; border: string }> = {
  'srv-01': {
    icon: <Cpu className="w-5 h-5 text-white" />,
    gradient: 'from-violet-600 to-fuchsia-600',
    badge: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20',
    border: 'hover:border-violet-500/50',
  },
  'srv-02': {
    icon: <Server className="w-5 h-5 text-white" />,
    gradient: 'from-blue-600 to-indigo-600',
    badge: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    border: 'hover:border-blue-500/50',
  },
  'srv-03': {
    icon: <Layers className="w-5 h-5 text-white" />,
    gradient: 'from-emerald-600 to-teal-500',
    badge: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    border: 'hover:border-emerald-500/50',
  },
  'srv-04': {
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    gradient: 'from-cyan-600 to-blue-500',
    badge: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    border: 'hover:border-cyan-500/50',
  },
  'srv-05': {
    icon: <Cloud className="w-5 h-5 text-white" />,
    gradient: 'from-purple-600 to-pink-600',
    badge: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
    border: 'hover:border-purple-500/50',
  },
  'srv-06': {
    icon: <RefreshCw className="w-5 h-5 text-white" />,
    gradient: 'from-amber-500 to-orange-500',
    badge: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
    border: 'hover:border-amber-500/50',
  },
};

export const ServicesPage: React.FC = () => {
  return (
    <PageTransition className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background colorful ambient glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="ENGINEERING PRACTICES"
          title="Software & AI Consulting Services"
          description="Disciplined engineering teams delivering specialized capabilities across modern cloud platforms, applied intelligence, and enterprise software."
        />

        {/* Services List */}
        <div className="space-y-16 lg:space-y-20">
          {services.map((srv) => {
            const config = SERVICE_CONFIGS[srv.id] || {
              icon: <Cpu className="w-5 h-5 text-white" />,
              gradient: 'from-violet-600 to-cyan-500',
              badge: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20',
              border: 'hover:border-violet-500/50',
            };

            const relatedProjectData = projects.filter((p) =>
              srv.relatedProjectSlugs.includes(p.slug)
            );

            return (
              <section
                key={srv.id}
                id={srv.slug}
                className={`scroll-mt-24 p-7 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 ${config.border} shadow-lg shadow-black/5 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Top Colorful Accent Strip */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${config.gradient}`} />

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="space-y-3.5 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${config.gradient} flex items-center justify-center shadow-md`}>
                        {config.icon}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${config.badge}`}>
                        {srv.number} PRACTICE
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                      {srv.title}
                    </h2>

                    <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md shadow-violet-500/20 transition-all shrink-0 whitespace-nowrap self-start"
                  >
                    <span>Discuss This Practice</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 3-Column Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  {/* Column 1: Problems Solved */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Problems Addressed</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {srv.problemsSolved.map((prob, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Capabilities */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-400">
                      <Layers className="w-4 h-4" />
                      <span>Core Capabilities</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
                      {srv.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-500 font-bold">✓</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Typical Deliverables */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Typical Deliverables</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {srv.typicalDeliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">→</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Projects Bar */}
                {relatedProjectData.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-mono">
                      <span className="font-semibold text-neutral-700 dark:text-neutral-300">Case Studies:</span>
                      {relatedProjectData.map((rp, i) => (
                        <React.Fragment key={rp.id}>
                          <Link
                            to={`/projects/${rp.slug}`}
                            className="text-violet-600 dark:text-cyan-400 hover:underline font-bold"
                          >
                            {rp.title}
                          </Link>
                          {i < relatedProjectData.length - 1 && <span className="text-neutral-400">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {srv.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Bottom Callout with Radiant Gradient */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/20 via-neutral-900/40 to-cyan-950/20 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-400 flex items-center justify-center mx-auto text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Need a tailored engagement model?
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto">
            Rocks Solutions adapts to your team structure—delivering end-to-end turnkey systems, specialized architecture leadership, or targeted modernization sprints.
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md shadow-violet-500/25 transition-all"
            >
              <span>Schedule Architecture Scoping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
