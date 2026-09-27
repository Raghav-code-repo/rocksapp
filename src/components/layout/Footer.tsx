import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Globe, Sparkles } from 'lucide-react';
import { company } from '../../data/company';
import { services } from '../../data/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 transition-colors overflow-hidden">
      {/* Radiant Top Aura Strip */}
      <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 via-pink-500 via-cyan-400 to-emerald-400 opacity-80" />

      {/* Ambient background glow dots */}
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Col 1 & 2: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-400 p-[1.5px] shadow-sm shadow-violet-500/30">
                <div className="w-full h-full rounded-[4px] bg-white dark:bg-neutral-950 flex items-center justify-center">
                  <span className="font-mono font-bold text-[10px] bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    RS
                  </span>
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                  Rocks
                </span>
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              {company.description}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan-500" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-violet-500" />
                <a
                  href={`mailto:${company.contactEmail}`}
                  className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors font-mono"
                >
                  {company.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-200 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-200 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Practice Areas</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors line-clamp-1"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Social & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-200 mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                <span>Connect</span>
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={company.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800 hover:border-violet-500 transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={company.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Company Domain"
                  className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-cyan-400 hover:border-cyan-400 transition-all shadow-sm"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors group focus-visible:outline-2 focus-visible:outline-violet-500"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-violet-500 dark:text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
            <Sparkles className="w-3.5 h-3.5 text-violet-500 dark:text-cyan-400" />
            <span>Engineered for performance, maintainability, and intelligent scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
