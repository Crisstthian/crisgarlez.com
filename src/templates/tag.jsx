import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/GeneralLayout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";
import { getSimplifiedPosts } from "../utils/helpers";

const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const message =
    totalCount === 1 ? " artículo encontrado." : " artículos encontrados.";

  return (
    <Layout>
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <header className="flex flex-col items-center py-6">
        <div className="w-8/12 container px-8">
          <h1 className="text-xl text-accent py-2">
            Artículos etiquetados: {tag}
          </h1>
          <p className="text-lg">
            <span className="font-semibold text-user">{totalCount}</span>
            {message}
          </p>
        </div>
      </header>
      <section className="flex flex-col items-center py-6">
        <div className="w-8/12 container px-8">
          <PostListing data={simplifiedPosts} />
        </div>
      </section>
    </Layout>
  );
};

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`;
