export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNote?: string;
  statusBadge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: 'Learning' | 'Practicing' | 'Building With';
    highlight?: boolean;
  }[];
}

export interface LearningItem {
  id: string;
  topic: string;
  category: 'Core Language' | 'Algorithms' | 'Backend & Data' | 'Tools & AI';
  status: 'In Active Study' | 'Building Projects' | 'Continuous Practice';
  summary: string;
  keyConcepts: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface ContactTopic {
  title: string;
  description: string;
  iconName: string;
}
