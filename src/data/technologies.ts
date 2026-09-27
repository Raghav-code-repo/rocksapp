import { TechCategory } from '../types';

/**
 * ============================================================================
 * TECHNOLOGIES & ENGINEERING CAPABILITIES
 * ============================================================================
 * Edit this list to reflect your team's specific stack, languages, and tools.
 * Note: Presented as core proficiencies and applied architecture patterns,
 * adhering to high engineering standards without claiming unsubstantiated
 * vendor certifications.
 */
export const technologyCategories: TechCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Modern, reactive client-side architectures engineered for sub-second interactions and zero layout shift.',
    technologies: [
      {
        name: 'React 19 & Next.js',
        description: 'Server Components, concurrent rendering, streaming HTML, and robust state management architectures.',
        level: 'Core Specialty',
      },
      {
        name: 'TypeScript',
        description: 'Strict type safety across API boundaries, compile-time invariant verification, and self-documenting codebases.',
        level: 'Core Specialty',
      },
      {
        name: 'Tailwind CSS & Design Systems',
        description: 'Utility-first tokens, dark/light theme systems, responsive breakpoint orchestration, and zero CSS bloat.',
        level: 'Core Specialty',
      },
      {
        name: 'Vite & Modern Tooling',
        description: 'Instant ESM dev workflows, optimized rollup bundles, tree-shaking, and lightweight web assets.',
        level: 'Primary Stack',
      },
      {
        name: 'WebRTC & Canvas API',
        description: 'Real-time collaborative whiteboards, selective forwarding media streams, and browser audio/video.',
        level: 'Supported',
      },
    ],
  },
  {
    category: 'Backend & Distributed Services',
    description: 'Scalable API runtimes and resilient microservices capable of handling high concurrency and complex transactions.',
    technologies: [
      {
        name: 'Node.js & Express / NestJS',
        description: 'High-throughput asynchronous I/O services, RESTful APIs, WebSocket servers, and background queues.',
        level: 'Core Specialty',
      },
      {
        name: 'Python & FastAPI',
        description: 'High-performance async ASGI gateways, Pydantic data validation, and machine learning model serving.',
        level: 'Core Specialty',
      },
      {
        name: 'Go (Golang)',
        description: 'Ultra-low latency microservices, concurrent worker routines, and lightweight system utilities.',
        level: 'Primary Stack',
      },
      {
        name: 'Temporal.io',
        description: 'Durable execution engines for multi-day business workflows with automatic retry, recovery, and state persistence.',
        level: 'Primary Stack',
      },
    ],
  },
  {
    category: 'Applied AI & Machine Learning',
    description: 'Production implementations of foundational models, semantic retrieval, and tool-augmented agents.',
    technologies: [
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        description: 'Dense and sparse hybrid search, cross-encoder rerankers, contextual chunking, and permission-aware retrieval.',
        level: 'Core Specialty',
      },
      {
        name: 'Autonomous Agent Workflows',
        description: 'Deterministic tool-calling loops, multi-agent coordination, human-in-the-loop checkpoints, and state rollbacks.',
        level: 'Core Specialty',
      },
      {
        name: 'Embeddings & Vector Search',
        description: 'High-dimensional semantic representation, HNSW indexing, and distance metric optimization.',
        level: 'Core Specialty',
      },
      {
        name: 'AST & Static Code Analysis',
        description: 'Tree-sitter language grammar parsers, call-graph synthesis, and deterministic structural code inspection.',
        level: 'Primary Stack',
      },
    ],
  },
  {
    category: 'Databases & Storage Engines',
    description: 'Relational data integrity, distributed caching, and columnar analytical engines for varied access patterns.',
    technologies: [
      {
        name: 'PostgreSQL & pgvector',
        description: 'ACID-compliant relational foundation, JSONB indexing, connection pooling, and vector similarity extensions.',
        level: 'Core Specialty',
      },
      {
        name: 'ClickHouse',
        description: 'High-speed columnar analytical DBMS processing millions of rows per second for executive BI dashboards.',
        level: 'Primary Stack',
      },
      {
        name: 'Qdrant & Vector Stores',
        description: 'Dedicated vector database for real-time payload filtering and low-latency nearest-neighbor search.',
        level: 'Primary Stack',
      },
      {
        name: 'Redis',
        description: 'In-memory pub/sub message brokers, distributed lock managers, rate limiters, and session caches.',
        level: 'Core Specialty',
      },
      {
        name: 'SQLite / DuckDB',
        description: 'Lightweight embedded storage for client-side processing, local analytical notebooks, and edge runtimes.',
        level: 'Supported',
      },
    ],
  },
  {
    category: 'Cloud, Infrastructure & DevOps',
    description: 'Automated deployment pipelines, container orchestration, and zero-downtime release engineering.',
    technologies: [
      {
        name: 'Docker & Containerization',
        description: 'Multi-stage hermetic build images, minimal Alpine/Debian-slim base layers, and vulnerability scanning.',
        level: 'Core Specialty',
      },
      {
        name: 'Kubernetes (K8s)',
        description: 'Declarative workload manifests, horizontal pod autoscaling, ingress controllers, and config management.',
        level: 'Primary Stack',
      },
      {
        name: 'Amazon Web Services (AWS)',
        description: 'ECS, EKS, RDS, S3, SQS, CloudFront, Lambda, and IAM least-privilege security architectures.',
        level: 'Primary Stack',
      },
      {
        name: 'Google Cloud Platform (GCP)',
        description: 'Cloud Run, GKE, Cloud Storage, BigQuery, and Pub/Sub event-driven architectures.',
        level: 'Primary Stack',
      },
      {
        name: 'CI/CD & GitHub Actions',
        description: 'Automated test matrices, preview environment provisioning, container registry publishing, and GitOps.',
        level: 'Core Specialty',
      },
      {
        name: 'OpenTelemetry & Prometheus',
        description: 'Distributed tracing, structured JSON telemetry logging, and service-level objective (SLO) dashboards.',
        level: 'Primary Stack',
      },
    ],
  },
];
