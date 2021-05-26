import React from 'react';
import { Link } from 'gatsby';
import { Post } from '../types';

interface Props {
  post: Post;
}

export default function BlogPostCell({ post }: Props) {
  return (
    <div>
      <Link to={post.fields.slug}>
        <h3 className="text-2xl no-underline font-semibold mb-1 hover:text-blue-600">
          {post.frontmatter.title}
        </h3>
      </Link>
      {/* Convert to date */}
      <p className="text-gray-500 mb-2">{post.frontmatter.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
    </div>
  );
}
