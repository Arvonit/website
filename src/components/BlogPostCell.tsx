import React from 'react';
import { Link } from 'gatsby';
import { Post } from '../types';
import { getISODate } from '../utils';

interface Props {
  post: Post;
}

export default function BlogPostCell({ post }: Props) {
  const date = getISODate(new Date(post.frontmatter.date));

  return (
    <div>
      <Link to={post.fields.slug}>
        <h3 className="text-xl md:text-2xl no-underline font-semibold mb-1 hover:text-blue-600">
          {post.frontmatter.title}
        </h3>
      </Link>
      <div className="text-gray-500 mb-2">
        <time dateTime={date}>{post.frontmatter.date}</time>
      </div>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
    </div>
  );
}
