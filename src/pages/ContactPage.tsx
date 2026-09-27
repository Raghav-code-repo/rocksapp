import React, { useState } from 'react';
import { Mail, Check, Copy, Linkedin, Github, Send, AlertCircle, ArrowUpRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { company } from '../data/company';
import { SectionHeader } from '../components/common/SectionHeader';
import { PageTransition } from '../components/common/PageTransition';

interface FormState {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  projectType?: string;
  description?: string;
}

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    projectType: 'AI & Generative AI Solutions',
    budgetRange: '$25,000 - $50,000',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Please provide your company or project name.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief summary of your project requirements.';
    } else if (formData.description.trim().length < 20) {
      errs.description = 'Please provide at least 20 characters describing your goals.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(company.contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Prepare mailto fallback
    const subject = encodeURIComponent(`Project Inquiry: ${formData.organization} - ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hello ${company.name} Engineering Team,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.organization}\n` +
      `Project Category: ${formData.projectType}\n` +
      `Target Budget: ${formData.budgetRange}\n\n` +
      `Project Brief & Objectives:\n${formData.description}\n\n` +
      `Sent via ${company.name} Inquiry Portal.`
    );

    const mailtoUrl = `mailto:${company.contactEmail}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);

    // Trigger user mail client fallback
    window.location.href = mailtoUrl;
  };

  return (
    <PageTransition className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background colorful ambient glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title="Discuss an Engineering Initiative"
          description={`Initiate a direct technical conversation with the ${company.name} software architects. No sales bureaucracy, just honest engineering feasibility.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Channels & Company Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-lg shadow-black/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-400" />

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span>Direct Contact Channels</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              {/* Email row with copy button */}
              <div>
                <p className="text-xs font-mono font-bold text-violet-600 dark:text-cyan-400 mb-1.5 uppercase">
                  Primary Inquiries
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${company.contactEmail}`}
                    className="text-sm font-bold text-neutral-900 dark:text-white hover:text-violet-600 dark:hover:text-cyan-400 font-mono transition-colors truncate"
                  >
                    {company.contactEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-violet-50 dark:hover:bg-neutral-800 hover:border-violet-500 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                  </button>
                  {copiedEmail && (
                    <span className="text-[11px] font-mono text-emerald-500 font-bold">Copied!</span>
                  )}
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-mono font-bold text-violet-600 dark:text-cyan-400 mb-1.5 uppercase">
                  Engineering Hub
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  <span>{company.location}</span>
                </div>
              </div>

              {/* Status */}
              <div>
                <p className="text-xs font-mono font-bold text-violet-600 dark:text-cyan-400 mb-1.5 uppercase">
                  Availability
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{company.availabilityStatus}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-xs font-mono font-bold text-neutral-500 mb-3 uppercase">
                  Professional Networks
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={company.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-sm"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <a
                    href={company.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800 hover:border-violet-500 transition-all shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Architecture note */}
            <div className="p-5 rounded-2xl border border-violet-500/20 bg-violet-50/20 dark:bg-neutral-900/30 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
              <p className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Data Privacy & Direct Dispatch:</span>
              </p>
              <p className="leading-relaxed">
                This portal drafts a structured <code className="font-mono text-violet-600 dark:text-cyan-400">mailto:</code> stream to your local email application. Your confidential requirements are never stored on third-party marketing databases.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-400" />

              <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-neutral-500 font-mono mb-8">
                Submit this form to generate a structured pre-formatted email to our engineering inbox.
              </p>

              {isSubmitted && (
                <div
                  role="status"
                  className="mb-8 p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs space-y-2 shadow-sm"
                >
                  <p className="font-bold flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
                    <Check className="w-4 h-4" />
                    Inquiry template composed successfully
                  </p>
                  <p className="text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
                    Your local email client has been launched with your project parameters. If your client did not open automatically, you can send your brief directly to{' '}
                    <strong className="font-mono text-emerald-900 dark:text-emerald-100">{company.contactEmail}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                    >
                      Your Name <span className="text-violet-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-300 dark:border-neutral-700 focus:border-violet-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                    >
                      Work Email <span className="text-violet-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="alex@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-300 dark:border-neutral-700 focus:border-violet-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Organization & Project Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                    >
                      Company / Organization <span className="text-violet-500">*</span>
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => {
                        setFormData({ ...formData, organization: e.target.value });
                        if (errors.organization) setErrors({ ...errors, organization: undefined });
                      }}
                      placeholder="e.g. Enterprise Co"
                      aria-invalid={Boolean(errors.organization)}
                      aria-describedby={errors.organization ? 'org-error' : undefined}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                        errors.organization
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-300 dark:border-neutral-700 focus:border-violet-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.organization && (
                      <p id="org-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                    >
                      Primary Practice Area
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="AI & Generative AI Solutions">AI & Generative AI Solutions</option>
                      <option value="Enterprise Software & Internal Platforms">Enterprise Software & Internal Platforms</option>
                      <option value="Web & Mobile Product Engineering">Web & Mobile Product Engineering</option>
                      <option value="Data Platforms & Business Intelligence">Data Platforms & Business Intelligence</option>
                      <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                      <option value="Software Modernization & Refactoring">Software Modernization & Refactoring</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budgetRange"
                    className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                  >
                    Anticipated Budget Range <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors cursor-pointer"
                  >
                    <option value="Under $25,000">Under $25,000 (Targeted sprint / Advisory)</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000 (Architecture MVP / Prototype)</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000 (Production System / Turnkey Platform)</option>
                    <option value="$100,000+">$100,000+ (Multi-quarter Enterprise Initiative)</option>
                    <option value="Undetermined">To be determined during scoping</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                  >
                    Project Context & Objectives <span className="text-violet-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: undefined });
                    }}
                    placeholder="Describe your system requirements, target users, technical constraints, and anticipated timeline..."
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? 'desc-error' : undefined}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                      errors.description
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-300 dark:border-neutral-700 focus:border-violet-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-violet-500/20'
                    }`}
                  />
                  {errors.description && (
                    <p id="desc-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button with Radiant Gradient */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-violet-500 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Inquiry in Email Client</span>
                  </button>
                  <span className="text-xs text-neutral-500 font-mono">
                    Direct PGP / TLS encrypted transport
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
