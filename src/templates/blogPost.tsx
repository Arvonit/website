import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Post } from '../types';

interface Props {
  data: any;
  pageContext: any;
}

export default function BlogPost({ data }: Props) {
  const post: Post = data.mdx;
  return (
    <Layout currentPage={post.frontmatter.title}>
      <h1 className="text-4xl font-semibold mb-4">{post.frontmatter.title}</h1>
      {/* Convert to date */}
      <p className="text-gray-600 mb-4">{post.frontmatter.date}</p>
      <article className="prose max-w-none">
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
