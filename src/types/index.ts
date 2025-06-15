export interface MetricData {
  id: string;
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
  period: string;
  category: 'productivity' | 'quality' | 'satisfaction' | 'delivery';
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  source: string;
  tags: string[];
  imageUrl: string;
  link: string;
  category: 'tools' | 'articles' | 'videos' | 'books' | 'courses';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: MetricData[];
  imageUrl: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  downloadUrl: string;
  previewUrl?: string;
  author: string;
  downloads: number;
  rating: number;
}

export interface SearchFilters {
  query: string;
  tags: string[];
  category: string;
  difficulty?: string;
}

export type Theme = 'light' | 'dark';