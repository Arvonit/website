import Link from 'next/link';
import { Post } from '../lib/types';
import { getAmericanDate } from '../lib/utils';

interface Props {
  post: Post;
}

export default function BlogPostCell({ post }: Props) {
  const formattedDate = getAmericanDate(new Date(post.date));

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-3 gap-y-1 items-center">
      {/* Date */}
      <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
        {formattedDate}
      </time>

      {/* Title */}
      <Link
        href={`/blog/${post.slug}`}
        className="text-lg text-sky-600 dark:text-sky-400 hover:underline font-medium truncate">
        {post.title}
      </Link>

      {/* Empty div to maintain the grid structure */}
      <div className="md:col-span-1"></div>

      {/* Excerpt */}
      <p className="prose dark:prose-invert">{post.excerpt}</p>
    </div>
  );
}
