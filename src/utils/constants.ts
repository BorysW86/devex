export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/', icon: 'Home' },
  { name: 'What is DevEx?', path: '/what-is-devex', icon: 'Info' },
  { name: 'Key Areas', path: '/key-areas', icon: 'Target' },
  { name: 'Metrics', path: '/metrics', icon: 'BarChart3' },
  { name: 'Case Studies', path: '/case-studies', icon: 'FileText' },
  { name: 'Getting Started', path: '/getting-started', icon: 'Play' },
  { name: 'Templates', path: '/templates', icon: 'Layout' },
  { name: 'Resources', path: '/resources', icon: 'BookOpen' },
];

export const DEVEX_DIMENSIONS = [
  {
    id: 'feedback-loops',
    title: 'Feedback Loops',
    description: 'Fast code review and testing feedback reduces wait time and supports flow state',
    details: 'Efficient feedback loops are crucial for maintaining developer momentum. When developers can quickly see the results of their changes through automated testing, code reviews, and deployment processes, they can iterate faster and maintain focus on problem-solving rather than waiting for responses.',
    keyMetrics: ['Code review time', 'Build/test duration', 'Deployment frequency'],
    icon: 'RefreshCw'
  },
  {
    id: 'cognitive-load',
    title: 'Cognitive Load',
    description: 'Clear codebases and processes reduce mental strain and improve focus',
    details: 'Cognitive load refers to the amount of mental effort required to understand and work with systems. By simplifying architectures, improving documentation, and standardizing processes, teams can reduce the mental overhead that prevents developers from focusing on core problem-solving.',
    keyMetrics: ['Documentation coverage', 'Code complexity', 'Onboarding time'],
    icon: 'Brain'
  },
  {
    id: 'flow-state',
    title: 'Flow State',
    description: 'Enabling uninterrupted focus yields satisfaction and higher throughput',
    details: 'Flow state occurs when developers can work with deep concentration without interruptions. This requires minimizing context switching, reducing meeting overhead, and providing environments that support sustained focus on complex problems.',
    keyMetrics: ['Interruption frequency', 'Deep work hours', 'Task completion rate'],
    icon: 'Zap'
  }
];

export const DEVEX_RESOURCES = [
  {
    id: 'dxkb',
    title: 'Developer Experience Knowledge Base',
    description: 'Comprehensive collection of articles, research, and best practices focused on Developer Experience, covering tools, processes, and methodologies.',
    type: 'Knowledge Base',
    url: 'https://dxkb.io',
    category: 'comprehensive'
  },
  {
    id: 'microsoft-devex',
    title: 'Engineering Fundamentals Playbook',
    subtitle: 'by Microsoft',
    description: 'Microsoft\'s comprehensive guide to engineering fundamentals, covering developer experience best practices, code reviews, testing, and team collaboration.',
    type: 'Playbook',
    url: 'https://microsoft.github.io/code-with-engineering-playbook/',
    category: 'enterprise'
  },
  {
    id: 'github-awesome-dx',
    title: 'Awesome Developer Experience',
    subtitle: 'Curated list of DX resources',
    description: 'A curated list of Developer Experience resources including tools, articles, talks, and frameworks to improve developer productivity and satisfaction.',
    type: 'Resource Collection',
    url: 'https://github.com/workos/awesome-developer-experience',
    category: 'community'
  },
  {
    id: 'leaddev-devex',
    title: 'What is Developer Experience?',
    subtitle: 'Your route to better productivity',
    description: 'LeadDev\'s comprehensive guide explaining what developer experience means, why it matters, and how to improve it within your engineering organization.',
    type: 'Guide',
    url: 'https://leaddev.com/developer-experience',
    category: 'foundational'
  },
  {
    id: 'spotify-metrics',
    title: 'Metrics-Driven Developer Productivity Engineering',
    subtitle: 'at Spotify',
    description: 'Learn how Spotify measures and improves developer productivity using metrics-driven approaches, platform insights, and organizational best practices.',
    type: 'Case Study',
    url: 'https://engineering.atspotify.com/2020/02/27/how-we-improved-data-discovery-for-data-scientists-at-spotify/',
    category: 'case-study'
  },
  {
    id: 'google-devex',
    title: 'Measuring Developer Productivity',
    subtitle: 'Real-World Examples',
    description: 'Google\'s approach to measuring developer productivity with real-world examples, metrics frameworks, and lessons learned from implementation.',
    type: 'Research',
    url: 'https://research.google/pubs/pub47801/',
    category: 'research'
  }
];

export const DEVEX_KEY_AREAS = [
  {
    id: 'tooling-infrastructure',
    title: 'Tooling & Infrastructure',
    summary: 'IDEs, CI/CD pipelines, version control systems, build tools, and test data management that form the foundation of development work.',
    keyMetrics: ['Build time', 'IDE performance', 'Infrastructure uptime'],
    tags: ['tools', 'infrastructure', 'automation']
  },
  {
    id: 'automation',
    title: 'Automation',
    summary: 'Unit and integration testing, Infrastructure as Code (IaC), monitoring, and automated deployment processes.',
    keyMetrics: ['Test coverage', 'Automation rate', 'Deployment success rate'],
    tags: ['automation', 'testing', 'monitoring']
  },
  {
    id: 'processes-workflows',
    title: 'Processes & Workflows',
    summary: 'Code review processes, incident management, Agile methodologies, and standardized development workflows.',
    keyMetrics: ['Process adherence', 'Workflow efficiency', 'Incident resolution time'],
    tags: ['process', 'workflow', 'agile']
  },
  {
    id: 'collaboration-communication',
    title: 'Collaboration & Communication',
    summary: 'Tools like Slack, Jira, Notion, and cross-functional communication flows that enable effective teamwork.',
    keyMetrics: ['Communication effectiveness', 'Cross-team collaboration', 'Knowledge sharing'],
    tags: ['collaboration', 'communication', 'teamwork']
  },
  {
    id: 'documentation',
    title: 'Documentation',
    summary: 'Internal documentation, onboarding guides, API specifications, and knowledge management systems.',
    keyMetrics: ['Documentation coverage', 'Search success rate', 'Update frequency'],
    tags: ['documentation', 'knowledge', 'onboarding']
  },
  {
    id: 'onboarding',
    title: 'Onboarding',
    summary: 'Streamlined access provisioning, clean development environment setup, and comprehensive new developer orientation.',
    keyMetrics: ['Time to first commit', 'Setup success rate', 'New developer satisfaction'],
    tags: ['onboarding', 'setup', 'new-developers']
  },
  {
    id: 'feedback-loops',
    title: 'Feedback Loops',
    summary: 'Continuous feedback through automated tools, peer reviews, and regular one-on-one meetings.',
    keyMetrics: ['Feedback speed', 'Review quality', 'Response time'],
    tags: ['feedback', 'reviews', 'continuous-improvement']
  },
  {
    id: 'work-environment',
    title: 'Work Environment',
    summary: 'Ergonomic workspaces, flexible remote/hybrid setups, and physical/digital environment optimization.',
    keyMetrics: ['Workspace satisfaction', 'Flexibility score', 'Environment quality'],
    tags: ['environment', 'ergonomics', 'flexibility']
  },
  {
    id: 'learning-development',
    title: 'Learning & Development',
    summary: 'Technical workshops, career growth paths, mentorship programs, and continuous learning opportunities.',
    keyMetrics: ['Learning hours', 'Skill development', 'Career progression'],
    tags: ['learning', 'development', 'growth']
  },
  {
    id: 'performance-metrics',
    title: 'Performance Metrics',
    summary: 'SPACE and DORA metrics, plus DevEx-specific indicators like feedback speed, cognitive load, and flow frequency.',
    keyMetrics: ['DORA metrics', 'SPACE framework', 'DevEx indicators'],
    tags: ['metrics', 'measurement', 'performance']
  }
];

export const METRICS_FRAMEWORKS = [
  {
    id: 'kede',
    name: 'KEDE',
    title: 'Knowledge-centric Developer Experience',
    description: 'A knowledge-centric approach to measuring developer work experience and cognitive load.',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    articles: [
      {
        title: 'Measuring Developer Work Experience',
        subtitle: 'A Knowledge-centric approach',
        description: 'Comprehensive framework for understanding and measuring developer experience through knowledge management and cognitive load assessment.',
        url: 'https://docs.kedehub.io/measuring-developer-work-experience',
        type: 'Framework Guide'
      },
      {
        title: 'How to measure developer cognitive load',
        subtitle: 'Practical implementation guide',
        description: 'Step-by-step approach to identifying and measuring cognitive load factors that impact developer productivity and satisfaction.',
        url: 'https://docs.kedehub.io/how-to-measure-developer-cognitive-load',
        type: 'Implementation Guide'
      }
    ]
  },
  {
    id: 'dora',
    name: 'DORA',
    title: 'DevOps Research and Assessment',
    description: 'Industry-standard metrics for measuring software delivery and operational performance.',
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    articles: [
      {
        title: 'Google Says You Might Be Doing DORA Metrics Wrong',
        subtitle: 'Common pitfalls and best practices',
        description: 'Insights from Google on how to properly implement and interpret DORA metrics to avoid common measurement mistakes.',
        url: 'https://thenewstack.io/google-says-you-might-be-doing-dora-metrics-wrong/',
        type: 'Best Practices'
      },
      {
        title: 'DORA Research: 2023',
        subtitle: 'Latest research findings',
        description: 'The most recent DORA research findings on software delivery performance and organizational capabilities.',
        url: 'https://dora.dev/research/',
        type: 'Research Report'
      }
    ]
  },
  {
    id: 'space',
    name: 'SPACE',
    title: 'Satisfaction, Performance, Activity, Communication, Efficiency',
    description: 'Holistic framework for measuring developer productivity across multiple dimensions.',
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    articles: [
      {
        title: 'Developer Productivity Engineering at Netflix',
        subtitle: 'Real-world SPACE implementation',
        description: 'How Netflix applies developer productivity engineering principles and SPACE metrics to improve their development experience.',
        url: 'https://thenewstack.io/developer-productivity-engineering-at-netflix/',
        type: 'Case Study'
      },
      {
        title: 'The SPACE of Developer Productivity',
        subtitle: 'There\'s more to it than you think',
        description: 'The original Microsoft Research paper introducing the SPACE framework for measuring developer productivity holistically.',
        url: 'https://www.microsoft.com/en-us/research/publication/the-space-of-developer-productivity-theres-more-to-it-than-you-think/',
        type: 'Research Paper'
      }
    ]
  },
  {
    id: 'devex',
    name: 'DevEx',
    title: 'Developer Experience Metrics',
    description: 'Focused metrics for understanding and improving the developer experience specifically.',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    articles: [
      {
        title: 'Can DevEx Metrics Drive Developer Productivity?',
        subtitle: 'Metrics-driven continuous improvement',
        description: 'Exploring how developer experience metrics can be used to drive continuous improvement in productivity and satisfaction.',
        url: 'https://thenewstack.io/developer-productivity-metrics-drive-continuous-improvement/',
        type: 'Analysis'
      },
      {
        title: 'DevEx: What Actually Drives Productivity',
        subtitle: 'Research-backed insights',
        description: 'ACM Queue article examining what factors actually drive developer productivity and how to measure them effectively.',
        url: 'https://queue.acm.org/detail.cfm?id=3594446',
        type: 'Research Article'
      }
    ]
  }
];

export const SAMPLE_METRICS: MetricData[] = [
  {
    id: '1',
    name: 'Deployment Frequency',
    value: 4.2,
    trend: 'up',
    change: 15,
    period: 'per week',
    category: 'delivery'
  },
  {
    id: '2',
    name: 'Lead Time',
    value: 2.5,
    trend: 'down',
    change: -20,
    period: 'days',
    category: 'delivery'
  },
  {
    id: '3',
    name: 'Developer Satisfaction',
    value: 8.1,
    trend: 'up',
    change: 8,
    period: 'out of 10',
    category: 'satisfaction'
  },
  {
    id: '4',
    name: 'Code Quality Score',
    value: 92,
    trend: 'stable',
    change: 2,
    period: '%',
    category: 'quality'
  }
];