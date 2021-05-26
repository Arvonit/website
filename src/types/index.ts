export enum Pages {
  Home = 'Home',
  Blog = 'Blog',
  About = 'About'
}

export interface Post {
  frontmatter: {
    title: string;
    date: string;
  };
  fields?: {
    slug: string;
  };
  excerpt?: string;
  body?: string;
}
