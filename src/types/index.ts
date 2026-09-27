export type ProjectCategory =
  | 'AI & Generative AI'
  | 'Enterprise Software'
  | 'Web Applications'
  | 'Mobile Applications'
  | 'Automation'
  | 'Data & Analytics'
  | 'Cloud & DevOps';

export type ProjectStatus =
  | 'Production Ready'
  | 'Active Pilot'
  | 'Architecture Prototype'
  | 'Client Deployed (Sample)';

export interface ProjectOutcome {
  metric: string;
  label: string;
  isIllustrative: boolean;
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  status: ProjectStatus;
  featured: boolean;
  year: string;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: string[];
  architectureSummary: string;
  architectureComponents?: { name: string; role: string }[];
  challenges: ProjectChallenge[];
  outcomes: ProjectOutcome[];
  outcomeDisclaimer?: string;
  clientContext?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  problemsSolved: string[];
  typicalDeliverables: string[];
  technologies: string[];
  relatedProjectSlugs: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    level?: 'Core Specialty' | 'Primary Stack' | 'Supported';
  }[];
}

export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  location: string;
  contactEmail: string;
  phone: string;
  linkedIn: string;
  github: string;
  website: string;
  foundedYear: number;
  availabilityStatus: string;
  mission: string;
  approach: string;
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  principles: {
    title: string;
    description: string;
  }[];
}
