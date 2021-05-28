import React from 'react';
import BlogPostList from '../components/BlogPostList';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

interface Props {
  data: any;
}

export default function Blog({ data }: Props) {
  const posts = data.allMdx.nodes;

  return (
    <Layout currentPage="Blog">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Blog</h2>
        <BlogPostList posts={posts} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
