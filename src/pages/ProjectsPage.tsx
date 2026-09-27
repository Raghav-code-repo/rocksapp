import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { ProjectCategory } from '../types';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { SectionHeader } from '../components/common/SectionHeader';
import { PageTransition } from '../components/common/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'title'>('featured');

  // Extract unique categories and technologies
  const allCategories: ProjectCategory[] = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category))) as ProjectCategory[];
  }, []);

  const allTechnologies = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  // Filter and sort
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        // Category filter
        if (selectedCategory !== 'all' && project.category !== selectedCategory) {
          return false;
        }

        // Technology filter
        if (selectedTech !== 'all' && !project.technologies.includes(selectedTech)) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = project.title.toLowerCase().includes(q);
          const matchesDesc = project.description.toLowerCase().includes(q);
          const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(q));
          const matchesProblem = project.problemStatement.toLowerCase().includes(q);
          const matchesArch = project.architectureSummary.toLowerCase().includes(q);
          if (!matchesTitle && !matchesDesc && !matchesTech && !matchesProblem && !matchesArch) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return Number(b.year) - Number(a.year);
        }
        if (sortBy === 'newest') {
          return Number(b.year) - Number(a.year);
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedTech, sortBy]);

  return (
    <PageTransition className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow="PORTFOLIO & CASE STUDIES"
          title="Software Projects & Architectural Systems"
          description="A curated gallery of engineering implementations, intelligent automation pipelines, and enterprise systems."
        />

        {/* Technical Sample Disclaimer Callout (Disciplined, Honest, Anti-Slop) */}
        <div className="mb-10 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-400">
          <Info className="w-4 h-4 shrink-0 text-neutral-500 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-neutral-800 dark:text-neutral-200">Demonstration & Reference Projects:</strong> The implementations showcased below illustrate our architectural paradigms, evaluation standards, and engineering depth. Benchmark metrics reflect controlled staging tests and simulated production loads.
          </p>
        </div>

        {/* Filter Toolbar */}
        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          sortBy={sortBy}
          onSortChange={setSortBy}
          allCategories={allCategories}
          allTechnologies={allTechnologies}
          totalResults={filteredProjects.length}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800">
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              No matching projects found
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Try adjusting your search criteria or clearing active filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTech('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
