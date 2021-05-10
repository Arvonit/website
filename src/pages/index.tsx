import { Link } from 'gatsby';
import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Hey!</h2>
        <p className="text-gray-700">
          I'm Arvind — a student, programmer, and creator. Whenever I have time, I try to write here
          about tech, programming, and productivity.
          {/* On my website, I write about
          different topics, including tech, helpful life advice, and history. */}
        </p>
      </div>
      <div className="space-y-8">
        <h2 className="text-4xl font-semibold mb-8">Recent Posts</h2>
        <BlogPostCard />
        <BlogPostCard />
        <Link to="/blog">
          <button className="mt-4 w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
            View All Posts -&gt;
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
