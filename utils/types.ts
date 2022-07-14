export interface Post {
  category: string;
  description: string;
  image: string;
  published: number;
  slug: string;
  title: string;
  readingTime: object;
}

export interface Project {
  title: string;
  image: string;
  icon: string;
  description: string;
  descriptionFr: string;
  order: number;
  isSecondary: boolean;
  repoLink: string;
  demoLink: string;
  tags: string[];
}
