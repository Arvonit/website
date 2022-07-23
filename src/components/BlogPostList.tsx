import Post from '../types/post';
import BlogPostCell from './BlogPostCell';

interface Props {
  posts: Post[];
}

export default function BlogPostList({ posts }: Props) {
  return (
    <>
      {posts.map(post => (
        <BlogPostCell post={post} key={post.slug} />
      ))}
    </>
  );
}
