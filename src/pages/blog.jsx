import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import GeneralLayout from "../layout/GeneralLayout";
import Search from "../components/Search";
import SEO from "../components/SEO/SEO";

import { getSimplifiedPosts } from "../utils/helpers";
import config from "../../data/SiteConfig";

const BlogPage = ({ data, ...props }) => {
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  return (
    <GeneralLayout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <SEO />
      <header className="flex flex-col items-center pt-6 pb-4">
        <div className="md:w-8/12 container md:px-8 px-2">
          <h1 className="text-5xl font-bold md:py-4 text-primary">Artículos</h1>
          <p className="text-2xl text-accent">Artículos, tutoriales y más</p>
        </div>
      </header>
      <section className="flex flex-col items-center py-6">
        <div className="md:w-8/12 container md:px-8 px-2">
          <Search posts={simplifiedPosts} {...props} />
        </div>
      </section>
    </GeneralLayout>
  );
};

export default BlogPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
            date(formatString: "MMMM DD, YYYY")
            categories
          }
        }
      }
    }
  }
`;
