import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Post } from '../types';
import { getISODate } from '../utils';

interface Props {
  data: any;
  pageContext: any;
}

export default function BlogPost({ data }: Props) {
  const post: Post = data.mdx;
  const date = getISODate(new Date(post.frontmatter.date));

  return (
    <Layout currentPage={post.frontmatter.title}>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">{post.frontmatter.title}</h1>
      <div className="text-gray-600 mb-6">
        <time dateTime={date}>{post.frontmatter.date}</time>
      </div>
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
