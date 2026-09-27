import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Code2, Users, FileCode, Sparkles } from 'lucide-react';
import { company } from '../data/company';
import { SectionHeader } from '../components/common/SectionHeader';
import { PageTransition } from '../components/common/PageTransition';

const PRINCIPLE_ACCENTS = [
  { bar: 'from-violet-500 to-fuchsia-500', text: 'text-violet-600 dark:text-violet-400' },
  { bar: 'from-blue-500 to-cyan-500', text: 'text-blue-600 dark:text-blue-400' },
  { bar: 'from-emerald-500 to-teal-500', text: 'text-emerald-600 dark:text-emerald-400' },
  { bar: 'from-amber-500 to-rose-500', text: 'text-amber-600 dark:text-amber-400' },
];

export const AboutPage: React.FC = () => {
  return (
    <PageTransition className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background colorful ambient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-violet-500/10 via-fuchsia-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 relative z-10">
        {/* Section 1: Intro / Who We Are */}
        <section className="space-y-8 max-w-4xl">
          <SectionHeader
            eyebrow="ABOUT THE PRACTICE"
            title="Disciplined Engineering for High-Stakes Software"
            description="We are a focused software engineering studio dedicated to building resilient distributed systems and applied artificial intelligence."
          />

          <div className="space-y-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              At <strong className="text-neutral-900 dark:text-white font-bold">{company.name}</strong>, we believe software engineering is an exacting craft. Too many software initiatives suffer from rushed compromises, unmaintainable dependencies, and fragile architectures that collapse under changing business demands.
            </p>
            <p>
              Our mission is simple: {company.mission}
            </p>
            <p>
              We operate as a high-velocity extension of your internal engineering leadership—taking full accountability for architecture, implementation, and rigorous automated testing.
            </p>
          </div>
        </section>

        {/* Section 2: Core Engineering Principles */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <SectionHeader
            eyebrow="WHAT GUIDES US"
            title="Engineering Principles"
            description="The four foundational tenets that govern every architecture decision, code review, and system design we execute."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.principles.map((p, idx) => {
              const accent = PRINCIPLE_ACCENTS[idx % PRINCIPLE_ACCENTS.length];
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden space-y-3"
                >
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${accent.bar}`} />
                  <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <span className={accent.text}>PRINCIPLE 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Delivery Methodology */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <SectionHeader
            eyebrow="EXECUTION CADENCE"
            title="Our Delivery Methodology"
            description="Transparent, milestone-based engineering with continuous verification and zero surprise delays."
          />

          <div className="space-y-6">
            {company.methodology.map((m, idx) => (
              <div
                key={m.step}
                className="p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:border-violet-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {m.step}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {m.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Verified Team Profiles Placeholder */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono font-bold text-violet-600 dark:text-cyan-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>TEAM & ROLES</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Direct Engineering Engagement
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              We do not employ account managers, commission sales reps, or junior delegates. Every project is directly scoped and engineered by principal software architects and senior developers.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-dashed border-violet-300 dark:border-neutral-700 bg-violet-50/20 dark:bg-neutral-900/20 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
              Verified Team Profiles Placeholder
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              In accordance with our strict data integrity policy, team member names and bios can be configured in <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[11px] text-violet-600 dark:text-cyan-400">src/data/company.ts</code> once official verified profiles are supplied by the organization owner.
            </p>
          </div>
        </section>

        {/* CTA with Radiant Gradient */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-xl shadow-violet-500/20">
            <div className="space-y-1">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Interested in engineering collaboration?</span>
              </h3>
              <p className="text-xs text-white/90">
                Let’s review your architectural requirements and project timeline.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-white text-neutral-900 hover:bg-neutral-100 shadow-md transition-all shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
