import React from 'react';
import { Post } from '../types';
import BlogPostCell from './BlogPostCell';

interface Props {
  posts: Array<Post>;
}

export default function BlogPostList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <p className="text-gray-700">
        This is awkward — looks like I haven't written any blog posts.
      </p>
    );
  }

  return (
    <>
      {posts.map(post => (
        <BlogPostCell post={post} />
      ))}
    </>
  );
}
