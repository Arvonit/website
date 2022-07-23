import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export default interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  body: string | MDXRemoteSerializeResult;
}
