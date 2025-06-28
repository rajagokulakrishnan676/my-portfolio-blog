export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Web Apps' | 'Cybersecurity' | 'Automation' | 'AI Tools';
  technologies: string[];
  image: string;
  demoGif?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Programming' | 'Tools' | 'Databases' | 'Cloud';
  level: string;
  yearsUsed: number;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface AnimatedRole {
  text: string;
  color: string;
}