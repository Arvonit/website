const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions;

  // Add blog/ prefix to slug
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: 'slug',
      value: `/blog${slug}`
    });
  }
};

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blogPost.tsx');

  return graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild('There was an error loading blog posts', result.errors);
      return;
    }

    const posts = result.data.allMdx.nodes;
    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          id: post.id
        }
      });
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      siteUrl: String
      author: Author
    }

    type Author {
      name: String
      summary: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      dateModified: Date
    }

    type Fields {
      slug: String
    }
  `);
};
