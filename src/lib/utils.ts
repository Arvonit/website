import { Post } from './types';
import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

function getISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getAmericanDate(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium'
  });
}

const postsDirectory = join(process.cwd(), 'posts');

export function getPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((first, second) => (first.date > second.date ? -1 : 1));
}

export function getPostFromSlug(slug: string): Post {
  // Find the file with the given slug
  const path = join(postsDirectory, `${slug}.md`);
  // Read the contents of the file
  const fileContents = fs.readFileSync(path, 'utf8');
  // Extract the frontmatter from the markdown file
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: getISODate(data.date),
    slug: slug,
    excerpt: getExcerpt(content),
    body: content
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => path.extname(file) === '.md')
    .map((file) => path.basename(file, path.extname(file)));
}

// Get first 250 characters of post
function getExcerpt(content: string): string {
  if (content.length < 250) {
    return content;
  }

  return content.substring(0, 250) + '...';
}
