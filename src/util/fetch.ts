import Post from '../types/post';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { getISODate } from './date';

const postsDirectory = join(process.cwd(), 'posts');

export function getPosts(): Post[] {
  return getPostSlugs()
    .map(slug => getPostFromSlug(slug))
    .sort((first, second) => (first.date > second.date ? -1 : 1));
}

// Get the first 5 posts
export function getRecentPosts(): Post[] {
  return getPosts().slice(0, 5);
}

export function getNumPosts(): number {
  return getPostSlugs().length;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

export function getPostFromSlug(slug: string): Post {
  // Find the folder in the file system with the given slug
  const path = join(postsDirectory, slug, 'index.md');
  // Read the contents of the folder's index.md
  const fileContents = fs.readFileSync(path, 'utf8');
  // Extract the frontmatter from the markdown file
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: getISODate(data.date),
    slug: slug,
    excerpt: '',
    body: content
  };
}
