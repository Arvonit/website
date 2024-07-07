import { Metadata } from 'next';
import BlogPostCell from '../../components/blog-post-cell';
import Layout from '../../components/layout';
import { getPosts } from '../../lib/utils';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function Blog() {
  const posts = getPosts();

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Blog</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPostCell key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
}
