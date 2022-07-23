import Link from 'next/link';
import Post from '../types/post';
import { getAmericanDate } from '../util/date';

interface Props {
  post: Post;
}

export default function BlogPostCell({ post }: Props) {
  const formattedDate = getAmericanDate(new Date(post.date));

  return (
    <div className="py-4">
      <p className="text-xl md:text-2xl no-underline font-semibold mb-1">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </p>
      <div className="text-gray-500 mb-2">
        <time dateTime={post.date}>{formattedDate}</time>
      </div>
      <p className="text-gray-700">{post.excerpt}</p>
    </div>
  );
}
