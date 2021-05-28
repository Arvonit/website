import React from 'react';
import BlogPostList from '../components/BlogPostList';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

interface Props {
  data: any;
}

export default function Home({ data }: Props) {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hey!</h2>
        <p className="text-gray-700">
          I'm Arvind — a student and programmer. Whenever I have time, I try to write here about
          tech, programming, and productivity.
        </p>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Recent Posts</h2>
        <BlogPostList posts={posts} />
        {posts.length > 0 && (
          <Link to="/blog">
            <button className="mt-4 w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
              View all posts -&gt;
            </button>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`;
