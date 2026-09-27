import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Layers } from 'lucide-react';
import { PageTransition } from '../components/common/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition className="py-24 sm:py-32 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          404 ERROR · ROUTE NOT FOUND
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          System Address Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The requested path does not map to any active software projects, service offerings, or documentation nodes.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
