import React from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ProjectCategory } from '../../types';

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTech: string;
  onTechChange: (tech: string) => void;
  sortBy: 'featured' | 'newest' | 'title';
  onSortChange: (sort: 'featured' | 'newest' | 'title') => void;
  allCategories: ProjectCategory[];
  allTechnologies: string[];
  totalResults: number;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTech,
  onTechChange,
  sortBy,
  onSortChange,
  allCategories,
  allTechnologies,
  totalResults,
}) => {
  return (
    <div className="space-y-6 mb-10">
      {/* Top Bar: Search and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        {/* Search Field with Vibrant Focus */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-violet-500 dark:text-cyan-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, architectures, technologies..."
            className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-violet-500/20 dark:focus:ring-cyan-400/20 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-1"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort & Tech Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5 text-violet-500 dark:text-cyan-400" />
            <span>Sort:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'featured' | 'newest' | 'title')}
            className="text-xs font-semibold py-2 px-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="title">Alphabetical (A-Z)</option>
          </select>

          {/* Tech Dropdown */}
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="text-xs font-semibold py-2 px-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors max-w-[140px] truncate cursor-pointer"
          >
            <option value="all">All Tech</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Segmented Filter Buttons with Colorful Active States */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-neutral-200 dark:border-neutral-800/80">
        <button
          type="button"
          onClick={() => onCategoryChange('all')}
          className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-md shadow-violet-500/30'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          All Categories
        </button>
        {allCategories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                isSelected
                  ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-md shadow-violet-500/30'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Summary Bar */}
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            Showing <strong className="text-neutral-900 dark:text-neutral-100 font-bold">{totalResults}</strong> {totalResults === 1 ? 'project' : 'projects'}
          </span>
        </div>
        {(selectedCategory !== 'all' || selectedTech !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              onCategoryChange('all');
              onTechChange('all');
              onSearchChange('');
            }}
            className="text-xs font-bold text-violet-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            <span>Reset all filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
