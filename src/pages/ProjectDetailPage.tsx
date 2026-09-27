import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Cpu, Layers, Server, ShieldCheck, Terminal, AlertCircle, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { PageTransition } from '../components/common/PageTransition';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [imageError, setImageError] = useState(false);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Related projects in same or complementary category
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.featured))
    .slice(0, 2);

  return (
    <PageTransition>
      <article className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-violet-500/10 via-fuchsia-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Link with colorful hover */}
          <div className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-500 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Header Block */}
          <header className="max-w-4xl space-y-4 mb-10">
            {/* Colorful Metadata Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full text-violet-600 dark:text-cyan-400 bg-violet-500/10 dark:bg-cyan-500/10 border border-violet-500/20 dark:border-cyan-500/20 font-bold">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.status}
              </span>
              <span className="text-neutral-500 dark:text-neutral-400 py-1 px-2">
                Completed {project.year}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
              style={{ textWrap: 'balance' }}
            >
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {project.tagline}
            </p>
          </header>

          {/* Hero Media Display with Radiant Glow */}
          <div className="relative rounded-2xl overflow-hidden p-[1.5px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 mb-16 shadow-2xl shadow-violet-500/10 aspect-[16/9] max-h-[560px]">
            <div className="w-full h-full rounded-[14px] bg-neutral-950 overflow-hidden relative">
              {!imageError && project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} detailed system view`}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-neutral-400 bg-gradient-to-br from-violet-950/20 via-neutral-950 to-cyan-950/20">
                  <Layers className="w-12 h-12 mb-3 text-violet-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">{project.category} Architecture View</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-neutral-200">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">ARCHETYPE: {project.id.toUpperCase()}</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">STATUS: {project.status.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Main Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Editorial Stream (8 cols) */}
            <div className="lg:col-span-8 space-y-14">
              {/* 1. Problem Statement */}
              <section className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-violet-600 dark:text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span>01. THE CHALLENGE</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Core Bottlenecks & Operational Context
                </h3>
                <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.problemStatement}
                </p>
                {project.clientContext && (
                  <div className="mt-4 p-4 rounded-xl bg-violet-50/50 dark:bg-violet-950/20 border border-violet-500/20 text-xs text-neutral-700 dark:text-neutral-300">
                    <span className="font-bold text-violet-700 dark:text-cyan-400 font-mono">Domain Context: </span>
                    {project.clientContext}
                  </div>
                )}
              </section>

              {/* 2. Solution Overview */}
              <section className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-600 dark:text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>02. THE SOLUTION</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Architectural Approach & Engineering Strategy
                </h3>
                <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.solutionOverview}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.architectureSummary}
                </p>
              </section>

              {/* 3. Architectural Components */}
              {project.architectureComponents && project.architectureComponents.length > 0 && (
                <section className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-violet-500" />
                    <span>Subsystem Decomposition</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.architectureComponents.map((comp) => (
                      <div
                        key={comp.name}
                        className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-violet-500/40 transition-colors"
                      >
                        <p className="text-sm font-bold font-mono text-violet-600 dark:text-cyan-400">
                          {comp.name}
                        </p>
                        <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {comp.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 4. Key Functional Features */}
              <section className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>03. CAPABILITIES</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Key System Features
                </h3>
                <div className="space-y-3">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Engineering Challenges & Mitigations */}
              <section className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-amber-600 dark:text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>04. RESILIENCE</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Technical Obstacles & Resolutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((ch, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-3 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 to-rose-500" />
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white pl-1">
                        Challenge: {ch.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-1">
                        {ch.description}
                      </p>
                      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 pl-1">
                        <p className="text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed">
                          <strong className="text-violet-600 dark:text-cyan-400 font-mono">Mitigation: </strong>
                          {ch.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Measurable Outcomes & Benchmark Results */}
              <section className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                  <span>05. VERIFICATION</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Performance Benchmarks & Target SLAs
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.outcomes.map((out, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent tabular-nums">
                        {out.metric}
                      </p>
                      <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 font-medium leading-snug">
                        {out.label}
                      </p>
                    </div>
                  ))}
                </div>

                {project.outcomeDisclaimer && (
                  <div className="flex items-start gap-2 text-xs text-neutral-500 font-mono mt-3 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
                    <span>{project.outcomeDisclaimer}</span>
                  </div>
                )}
              </section>
            </div>

            {/* Right Rail: Metadata & Tech Spec (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-6">
                {/* Specs Card */}
                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60 space-y-5">
                  <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-3 flex items-center justify-between">
                    <span>Engineering Blueprint</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </h3>

                  <div>
                    <p className="text-xs text-neutral-500 font-mono mb-1">Architecture Category</p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-500 font-mono mb-1">Production Status</p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">{project.status}</p>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-500 font-mono mb-1">Implementation Year</p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">{project.year}</p>
                  </div>

                  <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                    <p className="text-xs text-neutral-500 font-mono mb-2">Technology Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Consultation Card */}
                <div className="p-6 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/20 to-cyan-950/20 dark:bg-neutral-900 space-y-4 shadow-lg shadow-violet-500/5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                    Need a similar system?
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Rocks Solutions designs and deploys custom architectures tailored to your scale, throughput, and compliance requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md shadow-violet-500/25 transition-all"
                  >
                    <span>Request Architecture Review</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <section className="mt-24 pt-16 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Related Engineering Case Studies
                </h2>
                <Link
                  to="/projects"
                  className="text-xs font-mono font-bold text-violet-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Browse All</span>
                  <span>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((rel) => (
                  <ProjectCard key={rel.id} project={rel} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </PageTransition>
  );
};
