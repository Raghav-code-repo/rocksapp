import { CompanyConfig } from '../types';

/**
 * ============================================================================
 * CENTRAL BRAND & COMPANY CONFIGURATION - ROCKS SOLUTIONS
 * ============================================================================
 * Edit this single file to update your company identity, contact channels,
 * values, and engineering methodology across the entire website.
 * No hardcoded brand strings are spread across the UI components.
 */
export const company: CompanyConfig = {
  name: 'Rocks Solutions',
  shortName: 'Rocks Solutions',
  tagline: 'Engineering Intelligent Digital Products & Scalable AI',
  description:
    'We design, engineer, and modernize high-performance software products, intelligent AI platforms, and enterprise digital solutions.',
  location: 'Global Engineering & Innovation Hub',
  contactEmail: 'contact@rockssolutions.com',
  phone: '+1 (800) 762-5798',
  linkedIn: 'https://linkedin.com/company/rocks-solutions',
  github: 'https://github.com/rocks-solutions',
  website: 'https://rockssolutions.com',
  foundedYear: 2024,
  availabilityStatus: 'Accepting select Q3/Q4 engineering engagements & AI initiatives',

  mission:
    'To deliver resilient, high-leverage software architectures and applied artificial intelligence that accelerate business velocity, scale effortlessly, and eliminate technical debt.',

  approach:
    'We combine rigorous software architecture, pragmatic AI engineering, and human-centered design to produce maintainable systems that scale predictably.',

  methodology: [
    {
      step: '01',
      title: 'Discover & Align',
      description:
        'We unpack domain constraints, technical dependencies, and concrete business success metrics before writing a single line of code.',
    },
    {
      step: '02',
      title: 'Architect & Specify',
      description:
        'We produce transparent architecture blueprints, data models, API contracts, and evaluation benchmarks to derisk implementation early.',
    },
    {
      step: '03',
      title: 'Iterative Implementation',
      description:
        'Sprint-based delivery with continuous integration, automated testing, and bi-weekly production-grade milestone demonstrations.',
    },
    {
      step: '04',
      title: 'Verification & Hardening',
      description:
        'Rigorous security audits, load simulation, latency profiling, and edge-case validation ensure stability under production loads.',
    },
    {
      step: '05',
      title: 'Handoff & Knowledge Transfer',
      description:
        'Comprehensive documentation, team enablement workshops, and structured operational runbooks empower internal teams to own the stack.',
    },
  ],

  principles: [
    {
      title: 'Architecture over Hype',
      description:
        'We select reliable primitives and proven patterns over bleeding-edge trends unless novel technology yields distinct strategic advantage.',
    },
    {
      title: 'Verifiable Outcomes',
      description:
        'Every software system we engineer is backed by quantifiable benchmarks, latency targets, and transparent evaluation metrics.',
    },
    {
      title: 'Zero Vendor Lock-in',
      description:
        'We build on open standards, modular interfaces, and clean abstractions that allow seamless infrastructure migration at will.',
    },
    {
      title: 'Production Ergonomics',
      description:
        'Clean telemetry, structured observability, and self-documenting code ensure straightforward on-call maintenance and rapid developer onboarding.',
    },
  ],
};
