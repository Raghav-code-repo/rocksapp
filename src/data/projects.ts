import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-01',
    slug: 'enterprise-ai-knowledge-assistant',
    title: 'Enterprise AI Knowledge Assistant',
    tagline: 'Multi-tenant RAG platform indexing internal documentation, ticket histories, and technical wikis.',
    description:
      'A secure retrieval-augmented generation system engineered to synthesize distributed corporate knowledge across Confluence, Jira, GitHub, and proprietary document stores with strict role-based access enforcement.',
    category: 'AI & Generative AI',
    technologies: ['TypeScript', 'Python', 'FastAPI', 'Qdrant', 'OpenAI/Claude APIs', 'Next.js', 'PostgreSQL'],
    image: '/src/assets/images/project_ai_knowledge_1790496833342.jpg',
    status: 'Production Ready',
    featured: true,
    year: '2025',
    clientContext: 'Representative enterprise software prototype for regulated legal and compliance departments.',
    problemStatement:
      'Knowledge fragmentation across disparate corporate silos caused engineering and operations teams to spend an estimated 18% of their working hours searching for internal documentation, operational runbooks, and historical resolution tickets.',
    solutionOverview:
      'We engineered a microservices-driven hybrid retrieval system combining dense vector embeddings with BM25 keyword matching, integrated with a fine-tuned reranker and dynamic document permission verification before query generation.',
    keyFeatures: [
      'Hybrid dense-sparse retrieval combining vector similarity with lexical exact-match',
      'Granular Access Control List (ACL) sync respecting source permission trees in real time',
      'Hallucination guardrails with inline verbatim citation linking directly to verified source paragraphs',
      'Streaming token responses with interactive follow-up synthesis and export to internal wikis',
      'Offline document chunking pipeline with automated OCR for scanned PDFs and architectural diagrams',
    ],
    architectureSummary:
      'Asynchronous ingestion queues using Redis BullMQ extract, clean, and embed incoming documents into Qdrant. The query gateway runs on FastAPI, authenticating client tokens and applying pre-filtering metadata scopes before routing to LLM inference endpoints.',
    architectureComponents: [
      { name: 'Ingestion Pipeline', role: 'Asynchronous workers handling document parsing, chunking, and vectorization' },
      { name: 'Vector Store', role: 'Qdrant cluster with HNSW indexing and metadata payload filtering' },
      { name: 'Inference Gateway', role: 'FastAPI orchestrator managing semantic reranking, prompt templates, and streaming' },
      { name: 'Web Client', role: 'Next.js application featuring citation inspection, history recall, and source verification' },
    ],
    challenges: [
      {
        title: 'Information Leakage Across Permission Boundaries',
        description: 'Standard vector databases retrieve candidate chunks regardless of whether the requesting user has clearance to view the underlying document.',
        solution: 'Implemented deterministic metadata ACL filtering at the query embedding layer so unprivileged records are omitted prior to nearest-neighbor calculation.',
      },
      {
        title: 'Low Precision on Technical Terminology and Acronyms',
        description: 'Standard embedding models struggled with company-specific internal abbreviations and legacy project codenames.',
        solution: 'Integrated a reciprocal rank fusion pipeline pairing BM25 keyword search with dense embeddings, followed by a cross-encoder reranker.',
      },
    ],
    outcomes: [
      { metric: '< 850ms', label: 'Median P95 Query Latency', isIllustrative: true },
      { metric: '94.2%', label: 'Benchmark Citation Accuracy', isIllustrative: true },
      { metric: 'Zero', label: 'ACL Boundary Violations in Red-Team Audits', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Metrics reflect simulated benchmark test results against a 250,000-document synthetic dataset in controlled staging environments, not third-party client testimonials.',
  },
  {
    id: 'proj-02',
    slug: 'ai-code-review-platform',
    title: 'Automated Code Review & Static Analysis Platform',
    tagline: 'Context-aware pull request reviewer analyzing architectural invariants, security vulnerabilities, and code style.',
    description:
      'An intelligent developer tooling service that integrates with GitHub/GitLab webhooks to perform deep AST analysis, detect security anti-patterns, and generate inline diff suggestions with zero false-alarm spam.',
    category: 'AI & Generative AI',
    technologies: ['TypeScript', 'Node.js', 'Tree-sitter', 'Python', 'Docker', 'Redis', 'Tailwind CSS'],
    image: '/src/assets/images/project_code_review_1790496844931.jpg',
    status: 'Active Pilot',
    featured: true,
    year: '2025',
    clientContext: 'Engineering productivity archetype designed for scale-up development teams.',
    problemStatement:
      'Senior engineers were overwhelmed by repetitive manual pull request reviews focusing on trivial style violations and recurring API misuse, delaying feature merge velocity.',
    solutionOverview:
      'We built a dual-pass evaluation engine: Pass 1 executes fast Tree-sitter AST queries for deterministic rule verification; Pass 2 passes enriched semantic diff contexts to an LLM evaluator configured with repository-specific architectural rules.',
    keyFeatures: [
      'Bidirectional Git webhook integration posting comments directly onto matching commit diff lines',
      'AST-guided AST pruning that feeds only relevant callers and callee signatures to LLMs',
      'Configurable team guidelines written in declarative Markdown or YAML rulesets',
      'Severity scoring system that suppresses low-confidence cosmetic suggestions',
      'Interactive dashboard for tracking recurring repository technical debt hotspots',
    ],
    architectureSummary:
      'Webhook listener queues review tasks in Redis. Worker nodes checkout the branch shallowly, generate diffs, compute AST trees via Tree-sitter, synthesize review annotations, and batch-post comments via the Git provider REST API.',
    architectureComponents: [
      { name: 'Webhook Dispatcher', role: 'Validates cryptographic payload signatures and queues incoming PR events' },
      { name: 'AST Parser Service', role: 'Tree-sitter analysis for language syntax trees and call-graph construction' },
      { name: 'Analysis Engine', role: 'Applies team rule heuristics and queries LLM for semantic bug detection' },
      { name: 'Review Publisher', role: 'Consolidates suggestions and updates PR status checks' },
    ],
    challenges: [
      {
        title: 'Review Noise Fatigue',
        description: 'Early prototypes generated too many nitpicks, causing developers to ignore bot comments altogether.',
        solution: 'Introduced an inline confidence filter requiring suggestions to score above 0.88 semantic certainty before triggering GitHub comments.',
      },
      {
        title: 'Monorepo Context Limits',
        description: 'Large PRs with multiple file modifications exceeded standard LLM context windows.',
        solution: 'Developed an incremental chunking strategy reviewing independent functional modules separately and aggregating findings.',
      },
    ],
    outcomes: [
      { metric: '< 45s', label: 'Average Automated Review Turnaround', isIllustrative: true },
      { metric: '38%', label: 'Reduction in Trivial Review Comments in Testing', isIllustrative: true },
      { metric: '100%', label: 'Deterministic Syntax AST Coverage', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Results are based on internal test suites and synthetic open-source repository evaluation runs.',
  },
  {
    id: 'proj-03',
    slug: 'intelligent-document-processing',
    title: 'Intelligent Document Processing Pipeline',
    tagline: 'End-to-end unstructured document extraction for complex invoices, contracts, and logistics receipts.',
    description:
      'A resilient ETL pipeline that transforms heterogeneous PDFs, scanned tiffs, and multipage documents into validated JSON schemas with human-in-the-loop exception handling.',
    category: 'Automation',
    technologies: ['React', 'Python', 'FastAPI', 'Celery', 'PostgreSQL', 'Tesseract/LayoutLM', 'Tailwind CSS'],
    image: '/src/assets/images/project_document_proc_1790496857088.jpg',
    status: 'Production Ready',
    featured: true,
    year: '2024',
    clientContext: 'Reference solution for high-volume accounts payable and supply chain operations.',
    problemStatement:
      'Logistics and finance operators manually re-keyed thousands of supplier invoices every month, suffering a 4.2% data entry error rate and frequent payment reconciliation disputes.',
    solutionOverview:
      'We designed an automated optical character recognition and visual-language model pipeline that normalizes tables, detects signatures, and validates extracted totals against line-item sums.',
    keyFeatures: [
      'Multi-engine OCR with automated fallback between spatial layout models and vision LLMs',
      'JSON Schema validation enforcing strict numerical integrity and date formatting rules',
      'Human-in-the-loop review interface with dual-pane PDF viewer and auto-focusing on low-confidence fields',
      'Pre-built connectors for ERP ingest, webhook callbacks, and secure S3 bucket archiving',
      'Audit log tracking every manual operator edit and system confidence score',
    ],
    architectureSummary:
      'Files arrive via S3 buckets triggering an event-driven Celery worker pool. Extracted data is normalized and verified via Pydantic models. Flagged records route to an administrative React review console.',
    architectureComponents: [
      { name: 'Document Ingest S3', role: 'Encrypted object storage receiving raw PDF and image uploads' },
      { name: 'Extraction Workers', role: 'Celery tasks running computer vision and structured extraction' },
      { name: 'Validation Engine', role: 'Calculates cross-field arithmetic checks and taxonomy validation' },
      { name: 'Verification UI', role: 'Keyboard-optimized React interface for rapid operator sign-off' },
    ],
    challenges: [
      {
        title: 'Degraded Scans and Skewed Orientations',
        description: 'Real-world mobile phone snapshots and faxed receipts suffered from low contrast and heavy tilt.',
        solution: 'Implemented an automated preprocessing step utilizing OpenCV for deskewing, contrast normalization, and border cropping.',
      },
    ],
    outcomes: [
      { metric: '98.4%', label: 'Field Extraction Precision on Benchmark Test Set', isIllustrative: true },
      { metric: '12x', label: 'Processing Speed Factor vs Manual Entry', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Performance measured against a standard public dataset of 10,000 multi-format invoices.',
  },
  {
    id: 'proj-04',
    slug: 'learning-management-platform',
    title: 'Adaptive Learning Management System',
    tagline: 'Modern educational platform with personalized pacing, competency tracking, and assessment engines.',
    description:
      'A modular LMS built for technical academies and enterprise upskilling programs, supporting interactive code sandboxes, video streaming, and mastery-based progression paths.',
    category: 'Web Applications',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker'],
    image: '/src/assets/images/hero_software_platform_1790496819595.jpg',
    status: 'Production Ready',
    featured: true,
    year: '2024',
    clientContext: 'Educational software archetype built to replace legacy SCORM portals.',
    problemStatement:
      'Legacy LMS systems relied on rigid, one-size-fits-all curricula with high learner drop-off rates and virtually no real-time telemetry on learner comprehension.',
    solutionOverview:
      'Engineered an event-driven learning platform with granular prerequisite graph structures, embedded browser-based exercise sandboxes, and automated milestone badges.',
    keyFeatures: [
      'Interactive lesson builder with markdown support and live code execution frames',
      'Competency graph modeling skills progression instead of static linear course paths',
      'Real-time student progress dashboard for cohort instructors and training leads',
      'Offline-capable Progressive Web App architecture for low-bandwidth environments',
      'Automated quiz generation and randomized assessment question banks',
    ],
    architectureSummary:
      'React frontend communicating with a REST/GraphQL Node.js backend. User progress states are streamed via WebSockets for collaborative classroom synchronization, backed by PostgreSQL.',
    challenges: [
      {
        title: 'Interactive Code Execution Security',
        description: 'Executing untrusted student code exercises safely in real time.',
        solution: 'Isolated execution within ephemeral Docker containers restricted by seccomp profiles and strict CPU/memory limits.',
      },
    ],
    outcomes: [
      { metric: '99.9%', label: 'Platform Availability SLA Target', isIllustrative: true },
      { metric: 'Sub-100ms', label: 'Route Transition Latency', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Simulated load testing demonstrates capacity for 5,000 concurrent active learners.',
  },
  {
    id: 'proj-05',
    slug: 'live-interactive-classroom',
    title: 'Real-Time Interactive Virtual Classroom',
    tagline: 'Low-latency collaborative video canvas with real-time whiteboards and breakout rooms.',
    description:
      'A browser-based live classroom solution leveraging WebRTC and WebSockets for synchronous group discussions, synced document annotation, and low-latency audio/video feeds.',
    category: 'Web Applications',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'Redis', 'Canvas API', 'Tailwind CSS'],
    image: '/src/assets/images/project_ai_knowledge_1790496833342.jpg',
    status: 'Active Pilot',
    featured: false,
    year: '2024',
    clientContext: 'Synchronous collaboration prototype for remote teaching academies.',
    problemStatement:
      'Off-the-shelf video conferencing tools lacked pedagogical tooling such as shared coding boards, synchronized slide deck control, and instant comprehension polls.',
    solutionOverview:
      'Built a dedicated browser interface integrating selective-forwarding video tracks alongside an ultra-low latency vector canvas enabling synchronized teacher-student sketching.',
    keyFeatures: [
      'Selective Forwarding Unit (SFU) architecture balancing bandwidth across 50+ participants',
      'Collaborative vector drawing canvas with CRDT-based multi-cursor synchronization',
      'Instant polling with live histogram rendering and anonymized answer aggregation',
      'Instructor spotlighting, hand-raising queue, and timed breakout room automation',
    ],
    architectureSummary:
      'Media streams routed through Mediasoup SFU instances; state synchronization (cursor coordinates, board strokes, chat messages) managed via Redis Pub/Sub and Socket.io.',
    challenges: [
      {
        title: 'Canvas State Conflict in High-Latency Networks',
        description: 'Simultaneous annotations caused flickering and state overwrites on slow mobile connections.',
        solution: 'Adopted Conflict-Free Replicated Data Types (CRDTs) for drawing commands with optimistic local rendering.',
      },
    ],
    outcomes: [
      { metric: '< 180ms', label: 'End-to-End Audio/Video Latency', isIllustrative: true },
      { metric: '60 FPS', label: 'Canvas Rendering Performance on Standard Laptops', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Measured across simulated intercontinental network conditions in distributed test lab.',
  },
  {
    id: 'proj-06',
    slug: 'business-analytics-portal',
    title: 'Executive Financial & Business Analytics Portal',
    tagline: 'High-throughput operational intelligence dashboard with real-time multi-dimensional OLAP queries.',
    description:
      'A consolidated business metrics and forecasting portal designed for C-suite operators, unifying sales pipelines, revenue projections, and operational headcount costs.',
    category: 'Data & Analytics',
    technologies: ['React', 'TypeScript', 'ClickHouse', 'Node.js', 'Recharts', 'Tailwind CSS', 'PostgreSQL'],
    image: '/src/assets/images/project_code_review_1790496844931.jpg',
    status: 'Production Ready',
    featured: false,
    year: '2024',
    clientContext: 'Financial intelligence template for mid-market tech enterprises.',
    problemStatement:
      'Weekly executive reporting required manually compiling CSV exports from Stripe, Salesforce, and QuickBooks, producing stale metrics that took 3 days to verify.',
    solutionOverview:
      'Deployed an automated ingest pipeline loading operational events into ClickHouse, surfaced via a lightning-fast React dashboard with sub-second parameter recalculations.',
    keyFeatures: [
      'Interactive cohort retention charts and drill-down revenue decomposition tables',
      'What-if financial modeling slider for projected headcount and customer churn impact',
      'Scheduled automated PDF executive briefing generation sent weekly via email',
      'Role-based granular data masking protecting sensitive salary and cap table data',
    ],
    architectureSummary:
      'ClickHouse columnar database queried via lightweight Node.js proxy endpoints; cached aggregates in Redis; fronted by a responsive React interface with keyboard shortcuts.',
    challenges: [
      {
        title: 'Expensive Aggregations Over 50M+ Records',
        description: 'Standard relational queries took over 12 seconds to generate historical YoY reports.',
        solution: 'Migrated historical fact tables to ClickHouse materialized views, dropping query execution to under 70 milliseconds.',
      },
    ],
    outcomes: [
      { metric: 'Sub-100ms', label: 'Executive Dashboard Filter Render Time', isIllustrative: true },
      { metric: '100%', label: 'Automated Pipeline Sync vs Manual CSV Reports', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Performance benchmarks conducted with 75 million simulated financial ledger records.',
  },
  {
    id: 'proj-07',
    slug: 'workflow-automation-platform',
    title: 'Enterprise Workflow & Event Automation Platform',
    tagline: 'Visual DAG-based workflow builder connecting enterprise APIs, internal webhooks, and human approvals.',
    description:
      'A reliable orchestration platform for automating complex multi-step business procedures with retry backoffs, distributed state persistence, and audit logging.',
    category: 'Enterprise Software',
    technologies: ['React', 'TypeScript', 'Temporal.io', 'Go / Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: '/src/assets/images/project_document_proc_1790496857088.jpg',
    status: 'Architecture Prototype',
    featured: false,
    year: '2025',
    clientContext: 'Workflow orchestration pattern for distributed operations teams.',
    problemStatement:
      'Business processes spanning procurement, legal approvals, and identity provisioning failed silently when any single third-party vendor API experienced brief downtime.',
    solutionOverview:
      'Implemented durable execution workflows utilizing Temporal.io guarantees, wrapping every external API call with idempotent retries, state recovery, and human sign-off triggers.',
    keyFeatures: [
      'Drag-and-drop workflow canvas with real-time DAG cycle detection',
      'Durable execution guarantees ensuring workflows survive server restarts without losing state',
      'Integrated Slack and Email approval buttons with cryptographic signature tokens',
      'Live execution trace inspector with step-by-step input/output inspection',
    ],
    architectureSummary:
      'Temporal workflow cluster orchestrating activity workers written in Node.js and Go, with an administrative React console for workflow authoring and live telemetry.',
    challenges: [
      {
        title: 'Handling Days-Long Human Approval Bottlenecks',
        description: 'Traditional synchronous queues time out when waiting for manager email confirmation.',
        solution: 'Leveraged Temporal durable timers and signals that suspend execution state in persistent storage until approval triggers.',
      },
    ],
    outcomes: [
      { metric: 'Zero', label: 'Lost Tasks During Simulated Server Crashes', isIllustrative: true },
      { metric: '100%', label: 'Audit Trail Traceability on Workflows', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Verified via automated fault injection and chaos testing on Kubernetes staging clusters.',
  },
  {
    id: 'proj-08',
    slug: 'cloud-cost-monitoring-dashboard',
    title: 'Multi-Cloud Cost Intelligence & Anomaly Dashboard',
    tagline: 'Unified cloud spending governance, cost attribution, and runaway resource alerting across AWS and GCP.',
    description:
      'A FinOps observability platform that collects billing exports, allocates infrastructure costs to individual engineering teams, and flags anomalous spend spikes within minutes.',
    category: 'Cloud & DevOps',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'Tailwind CSS'],
    image: '/src/assets/images/hero_software_platform_1790496819595.jpg',
    status: 'Production Ready',
    featured: false,
    year: '2024',
    clientContext: 'FinOps utility archetype for microservice-heavy cloud deployments.',
    problemStatement:
      'Monthly cloud bills regularly surprised engineering leadership with 30-40% unpredicted variance due to orphaned test environments and untagged cloud volumes.',
    solutionOverview:
      'Engineered an hourly cost ingest and anomaly detection engine that parses CUR files, groups costs by Kubernetes namespace tags, and issues proactive Slack alerts.',
    keyFeatures: [
      'Multi-cloud normalization mapping AWS, GCP, and Azure SKUs into unified taxonomy categories',
      'Dynamic threshold anomaly detection identifying sudden egress or compute spikes',
      'Orphaned resource scanner detecting unattached EBS volumes and idle load balancers',
      'Team-level budget quotas with configurable email warning thresholds',
    ],
    architectureSummary:
      'Scheduled serverless ingestion jobs parse daily cloud billing exports into PostgreSQL. A lightweight Node.js API serves aggregated metric time-series to a sleek React dashboard.',
    challenges: [
      {
        title: 'Massive Line-Item Volumes in AWS CUR Files',
        description: 'Raw billing files exceeded 2GB per day, causing traditional database inserts to lock up.',
        solution: 'Implemented streaming Parquet readers in Python that aggregate micro-charges in memory before writing summarized daily rollups.',
      },
    ],
    outcomes: [
      { metric: '< 2 hours', label: 'Average Anomaly Detection Time Window', isIllustrative: true },
      { metric: '100%', label: 'Cost Allocation Coverage on Tagged Workloads', isIllustrative: true },
    ],
    outcomeDisclaimer:
      'Evaluated using sanitized open cloud billing datasets across 18 enterprise service categories.',
  },
];
