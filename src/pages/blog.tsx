import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Layout from '../components/Layout';

function Blog() {
  return (
    <Layout>
      <div className="space-y-8">
        <h2 className="text-4xl font-semibold mb-8">Blog</h2>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </Layout>
  );
}

export default Blog;
