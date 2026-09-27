import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { company } from '../../data/company';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Technology', path: '/technology' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md transition-colors duration-200">
      {/* Radiant Top Aura Strip */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 via-pink-500 via-cyan-400 to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo with Colorful Geometric Emblem */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label={`${company.name} Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-400 p-[1.5px] shadow-sm shadow-violet-500/30 group-hover:shadow-cyan-400/50 transition-shadow">
              <div className="w-full h-full rounded-[6px] bg-white dark:bg-neutral-950 flex items-center justify-center">
                <span className="font-mono font-bold text-xs bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  RS
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">
                Rocks
              </span>
              <span className="text-base font-bold tracking-tight bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </div>
          </Link>

          {/* Clean text navigation links with vibrant active states */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-wider font-medium transition-all duration-200 hover:text-violet-600 dark:hover:text-cyan-400 ${
                    isActive
                      ? 'text-violet-600 dark:text-cyan-400 font-semibold underline underline-offset-8 decoration-violet-500 dark:decoration-cyan-400 decoration-2'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Action buttons with Colorful Gradient Accents */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-violet-50 dark:hover:bg-neutral-900 transition-colors focus-visible:outline-2 focus-visible:outline-violet-500"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-600" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-400 shadow-md shadow-violet-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-violet-500 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-violet-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu with colorful styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md px-4 pt-3 pb-5 overflow-hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-cyan-500/15 text-violet-600 dark:text-cyan-400 font-semibold border-l-2 border-violet-500'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-md shadow-violet-500/20"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Discuss a Project</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
