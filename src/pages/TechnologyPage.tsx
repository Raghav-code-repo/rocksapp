import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Database, Server, Layers, GitBranch, ShieldCheck, Sparkles } from 'lucide-react';
import { technologyCategories } from '../data/technologies';
import { SectionHeader } from '../components/common/SectionHeader';
import { PageTransition } from '../components/common/PageTransition';

const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; gradient: string; text: string; bg: string }> = {
  'Frontend Engineering': {
    icon: <Layers className="w-5 h-5 text-violet-500" />,
    gradient: 'from-violet-500 to-fuchsia-500',
    text: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10',
  },
  'Backend & Distributed Services': {
    icon: <Server className="w-5 h-5 text-emerald-500" />,
    gradient: 'from-emerald-500 to-teal-500',
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  'Applied AI & Machine Learning': {
    icon: <Cpu className="w-5 h-5 text-amber-500" />,
    gradient: 'from-amber-500 to-orange-500',
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
  },
  'Databases & Storage Engines': {
    icon: <Database className="w-5 h-5 text-blue-500" />,
    gradient: 'from-blue-500 to-cyan-500',
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
  },
  'Cloud, Infrastructure & DevOps': {
    icon: <Terminal className="w-5 h-5 text-sky-500" />,
    gradient: 'from-sky-500 to-indigo-500',
    text: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500/10',
  },
};

export const TechnologyPage: React.FC = () => {
  return (
    <PageTransition className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background colorful ambient glows */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-fuchsia-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20 relative z-10">
        {/* Header */}
        <SectionHeader
          eyebrow="STACK & ARCHITECTURE"
          title="Technology Inventory & Capabilities"
          description="A transparent breakdown of the programming languages, distributed runtimes, databases, and AI tooling deployed by Rocks Solutions."
        />

        {/* Evaluation Rubric / Technology Philosophy */}
        <section className="p-7 sm:p-10 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/15 via-white dark:via-neutral-900/40 to-cyan-950/15 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span>How We Choose Technologies</span>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We practice conservative innovation: adopting bleeding-edge AI tooling only when it solves an otherwise intractable problem, while relying on proven, battle-tested primitives for core data integrity and business transactions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-sm">
                <span className="font-bold block text-violet-600 dark:text-violet-400 mb-1">01. Type Safety</span>
                <span className="text-neutral-600 dark:text-neutral-400">Strict compile-time invariant checking across all API schemas.</span>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-sm">
                <span className="font-bold block text-cyan-600 dark:text-cyan-400 mb-1">02. Observability</span>
                <span className="text-neutral-600 dark:text-neutral-400">Native support for structured telemetry, metrics, and tracing.</span>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-sm">
                <span className="font-bold block text-emerald-600 dark:text-emerald-400 mb-1">03. Portability</span>
                <span className="text-neutral-600 dark:text-neutral-400">Open standards and container isolation with zero vendor lock-in.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categorized Tech Stacks */}
        <div className="space-y-12">
          {technologyCategories.map((cat) => {
            const style = CATEGORY_STYLES[cat.category] || {
              icon: <GitBranch className="w-5 h-5 text-neutral-400" />,
              gradient: 'from-violet-500 to-cyan-500',
              text: 'text-violet-600 dark:text-violet-400',
              bg: 'bg-violet-500/10',
            };

            return (
              <section
                key={cat.category}
                className="p-7 sm:p-9 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-sm relative overflow-hidden"
              >
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${style.gradient}`} />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-6 border-b border-neutral-200 dark:border-neutral-800 mb-8">
                  <div className={`p-2.5 rounded-xl ${style.bg}`}>
                    {style.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.technologies.map((t) => (
                    <div
                      key={t.name}
                      className="p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40 hover:border-violet-500/30 transition-all space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold font-mono text-neutral-900 dark:text-white">
                          {t.name}
                        </h4>
                        {t.level && (
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                            {t.level}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-xl shadow-violet-500/20">
            <div className="space-y-1">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Need stack advice for your next project?</span>
              </h3>
              <p className="text-xs text-white/90">
                Rocks Solutions conducts architecture reviews, performance audits, and technology trade-off evaluations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-white text-neutral-900 hover:bg-neutral-100 shadow-md transition-all shrink-0"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
