import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 animate-pulse" />
          <p className="text-xs uppercase tracking-widest font-mono font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
