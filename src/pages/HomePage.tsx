import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, Shield, Cpu, Sparkles, Terminal, Database, Server, Layers, Code, Zap } from 'lucide-react';
import { company } from '../data/company';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { PageTransition } from '../components/common/PageTransition';

// Custom service accents for colorful, vibrant UI
const SERVICE_ACCENTS = [
  {
    iconBg: 'bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-violet-500/30',
    borderHover: 'hover:border-violet-500/60 dark:hover:border-violet-400/60',
    stepColor: 'text-violet-600 dark:text-violet-400',
    bar: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
  },
  {
    iconBg: 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-blue-500/30',
    borderHover: 'hover:border-blue-500/60 dark:hover:border-blue-400/60',
    stepColor: 'text-blue-600 dark:text-blue-400',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
  },
  {
    iconBg: 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-emerald-500/30',
    borderHover: 'hover:border-emerald-500/60 dark:hover:border-emerald-400/60',
    stepColor: 'text-emerald-600 dark:text-emerald-400',
    bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
  {
    iconBg: 'bg-gradient-to-tr from-cyan-600 to-blue-500 text-white shadow-cyan-500/30',
    borderHover: 'hover:border-cyan-500/60 dark:hover:border-cyan-400/60',
    stepColor: 'text-cyan-600 dark:text-cyan-400',
    bar: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
  {
    iconBg: 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-purple-500/30',
    borderHover: 'hover:border-purple-500/60 dark:hover:border-purple-400/60',
    stepColor: 'text-purple-600 dark:text-purple-400',
    bar: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    iconBg: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-amber-500/30',
    borderHover: 'hover:border-amber-500/60 dark:hover:border-amber-400/60',
    stepColor: 'text-amber-600 dark:text-amber-400',
    bar: 'bg-gradient-to-r from-amber-500 to-orange-500',
  },
];

const STEP_COLORS = [
  { number: 'text-violet-500 dark:text-violet-400', bar: 'from-violet-500 to-fuchsia-500', ring: 'border-violet-500/30' },
  { number: 'text-blue-500 dark:text-blue-400', bar: 'from-blue-500 to-cyan-500', ring: 'border-blue-500/30' },
  { number: 'text-cyan-500 dark:text-cyan-400', bar: 'from-cyan-500 to-teal-500', ring: 'border-cyan-500/30' },
  { number: 'text-emerald-500 dark:text-emerald-400', bar: 'from-emerald-500 to-green-500', ring: 'border-emerald-500/30' },
  { number: 'text-amber-500 dark:text-amber-400', bar: 'from-amber-500 to-rose-500', ring: 'border-amber-500/30' },
];

export const HomePage: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <PageTransition className="flex flex-col">
      {/* ========================================================================= */}
      {/* HERO SECTION WITH VIBRANT COLORFUL GRADIENTS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-neutral-200 dark:border-neutral-800">
        {/* Colorful Radiant Ambient Glows */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-600/15 via-fuchsia-600/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(currentColor 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Colorful CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Vibrant Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 border border-violet-500/20 dark:border-violet-400/25">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 animate-pulse" />
                <p className="text-xs uppercase tracking-widest font-mono font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  SOFTWARE ENGINEERING <span className="opacity-40">|</span> AI <span className="opacity-40">|</span> DIGITAL PRODUCTS
                </p>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                We Build Software That{' '}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 via-pink-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:via-pink-400 dark:to-cyan-300 bg-clip-text text-transparent">
                  Moves Businesses Forward.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                From intelligent automation to enterprise platforms, {company.name} designs and engineers digital solutions that solve real problems, accelerate velocity, and scale effortlessly.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-violet-500"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border-2 border-violet-500/30 dark:border-cyan-500/30 text-neutral-900 dark:text-white hover:bg-violet-50/80 dark:hover:bg-neutral-900 hover:border-violet-500 dark:hover:border-cyan-400 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-violet-500"
                >
                  <Sparkles className="w-4 h-4 text-violet-500 dark:text-cyan-400" />
                  <span>Discuss a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Colorful Trust Badges */}
              <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="p-1 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Shield className="w-3.5 h-3.5" />
                  </span>
                  <span>Type Safety & Rigor</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="p-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Cpu className="w-3.5 h-3.5" />
                  </span>
                  <span>Applied AI Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <span className="p-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" />
                  </span>
                  <span>Zero Vendor Lock-in</span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Software Platform Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Glowing border frame */}
                <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-500 via-fuchsia-500 via-cyan-400 to-emerald-400 shadow-2xl shadow-violet-500/20">
                  <div className="rounded-[14px] bg-neutral-950 overflow-hidden">
                    {/* Browser Chrome Header with Vivid Traffic Lights */}
                    <div className="h-10 bg-neutral-900/95 px-4 flex items-center justify-between border-b border-neutral-800">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
                        <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      </div>
                      <div className="px-3 py-1 rounded-md bg-neutral-800/80 border border-neutral-700/50 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-mono text-neutral-300 truncate max-w-[200px]">
                          core.rockssolutions.io
                        </span>
                      </div>
                      <div className="w-8" />
                    </div>

                    {/* High-Fidelity UI Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      <img
                        src="/src/assets/images/hero_software_platform_1790496819595.jpg"
                        alt="Rocks Solutions enterprise software platform interface"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                      
                      {/* Live Telemetry Status Bar */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-200">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            CLUSTER: RS-PROD-01
                          </span>
                          <span className="text-neutral-400">LATENCY: 12ms</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          ALL SYSTEMS OPERATIONAL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layered Floating Secondary Detail Card */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 rounded-xl border border-violet-500/30 bg-white/95 dark:bg-neutral-900/95 p-4 shadow-xl shadow-violet-500/10 backdrop-blur-md max-w-xs animate-subtle-float">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <span>Applied Intelligence</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </p>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                        Vector search, AST analysis & RAG
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION A: COMPANY INTRODUCTION (EDITORIAL) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono font-bold text-violet-600 dark:text-cyan-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span>01. WHO WE ARE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white" style={{ textWrap: 'balance' }}>
                Engineering Rigor Meets Practical AI
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-neutral-900 dark:text-white font-bold">{company.name}</strong> is an international software engineering and AI consulting firm. We partner with ambitious leaders, technology executives, and scale-ups to design, architect, and deploy high-leverage digital systems.
              </p>
              <p>
                Unlike agencies that wrap superficial chatbots around generic templates, we specialize in high-reliability distributed systems, deterministic retrieval architectures, and modern web applications that integrate cleanly into existing enterprise infrastructure.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Production-hardened codebases</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Verifiable benchmark metrics</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Complete IP & codebase handover</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>No proprietary framework locks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION B: FEATURED PROJECTS (ASYMMETRIC GRID) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionHeader
              eyebrow="02. SELECTED WORK"
              title="Featured Engineering Case Studies"
              description="Real software architectures engineered with discipline, measurable benchmarks, and modern technology."
              className="mb-0 sm:mb-0"
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-cyan-400 bg-violet-50 dark:bg-neutral-900 hover:bg-violet-100 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap border border-violet-200 dark:border-neutral-700"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {/* Top Showcase Project (Large Asymmetric Layout) */}
            {featuredProjects[0] && (
              <ProjectCard project={featuredProjects[0]} featuredLayout={true} />
            )}

            {/* 2-Column Grid for Secondary Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.slice(1, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: CAPABILITIES / CORE SERVICES WITH COLORFUL CARDS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="03. CAPABILITIES"
            title="Core Engineering Practices"
            description="Focused technical disciplines delivered by seasoned engineers with end-to-end architectural accountability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((srv, index) => {
              const accent = SERVICE_ACCENTS[index % SERVICE_ACCENTS.length];
              return (
                <div
                  key={srv.id}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 ${accent.borderHover} transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 dark:hover:shadow-cyan-500/5 overflow-hidden`}
                >
                  {/* Colorful Top Accent Strip */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 ${accent.bar}`} />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-mono font-bold ${accent.stepColor}`}>
                        {srv.number}
                      </span>
                      <div className={`w-9 h-9 rounded-xl ${accent.iconBg} flex items-center justify-center shadow-md`}>
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2.5 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <ul className="space-y-2 mb-6 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
                      {srv.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${accent.stepColor} bg-current`} />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors"
                    >
                      <span>Explore Practice Deliverables</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D: TECHNOLOGY EXPERTISE WITH VIBRANT CARDS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="04. TECHNOLOGY"
                title="Tested Stacks. Predictable Delivery."
                description="We select battle-tested, high-throughput technologies with strong community ecosystems and verifiable operational characteristics."
              />
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/20 transition-all duration-200"
              >
                <span>Complete Technology Inventory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-violet-500/50 transition-colors space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                  <div className="p-2 rounded-lg bg-violet-500/10">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>Frontend Systems</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  React 19, TypeScript, Next.js, Vite, Tailwind CSS, WebRTC
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-emerald-500/50 transition-colors space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Server className="w-4 h-4" />
                  </div>
                  <span>Backend & Runtimes</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Node.js, Express, Python FastAPI, Go, Temporal.io, Docker
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-amber-500/50 transition-colors space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Applied AI & Retrieval</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Hybrid RAG, Qdrant, pgvector, Tree-sitter AST, Agent Tooling
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-cyan-500/50 transition-colors space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Database className="w-4 h-4" />
                  </div>
                  <span>Data & Analytical Stores</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  PostgreSQL, ClickHouse, Redis Pub/Sub, DuckDB, Parquet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: PROCESS (01-05) WITH COLORFUL PROGRESSION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="05. DELIVERY METHODOLOGY"
            title="How We Engineer Software"
            description="A structured, transparent lifecycle engineered to eliminate ambiguity and prevent late-stage delivery failures."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {company.methodology.map((step, idx) => {
              const scheme = STEP_COLORS[idx % STEP_COLORS.length];
              return (
                <div
                  key={step.step}
                  className={`p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                >
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${scheme.bar}`} />
                  <div>
                    <span className={`text-sm font-mono font-bold ${scheme.number} mb-4 block`}>
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION F: CONTACT CTA WITH RADIANT COLORFUL ACCENT */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-violet-500/30 dark:border-cyan-500/30 bg-gradient-to-br from-violet-900/10 via-fuchsia-900/10 to-cyan-900/10 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-cyan-950/40 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl shadow-violet-500/10 overflow-hidden">
            {/* Background radiant aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-cyan-400 border border-violet-500/20 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INITIATE ENGAGEMENT</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Have an architecture challenge or software initiative in mind?
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Connect directly with the {company.name} engineering team. We provide pragmatic architecture feedback, feasibility reviews, and transparent scoping without sales pressure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-400 shadow-xl shadow-violet-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
