import BlogPostList from '../components/BlogPostList';
import Layout from '../components/Layout';
import { getRecentPosts } from '../util/fetch';
import Post from '../types/post';
import Link from 'next/link';

interface Props {
  recentPosts: Post[];
}

export default function Home({ recentPosts }: Props) {
  return (
    <Layout>
      {/* Hero */}
      <div className="pt-6">
        <h2 className="text-xl md:text-2xl font-semibold">Hey!</h2>
        <p className="text-gray-700 mt-4">
          I&apos;m Arvind Kasiliya. I&apos;m a student at the University of Connecticut studying
          Computer Science.
          {/* Welcome to my home on the internet. Below, you can view some of the
          projects I&apos;ve worked on. When I have time, I like to write about various topics that
          interest me. */}
        </p>
      </div>
      {/* Recent Posts */}
      <div className="pt-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Recent Posts</h2>
        <BlogPostList posts={recentPosts} />
        {recentPosts.length > 0 && (
          <Link href="/blog">
            <button className="w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
              View all posts -&gt;
            </button>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const recentPosts = getRecentPosts();

  return { props: { recentPosts } };
}
