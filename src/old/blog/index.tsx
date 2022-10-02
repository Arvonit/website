import Layout from '../../components/Layout';
import { getPosts } from '../../util/fetch';
import Post from '../../types/post';
import BlogPostList from '../../components/BlogPostList';

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <Layout title="Blog">
      <div className="pt-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Blog Posts</h2>
        <BlogPostList posts={posts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
