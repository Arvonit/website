import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author {
            name
            summary
          }
        }
      }
    }
  `);

  return site.siteMetadata;
}
