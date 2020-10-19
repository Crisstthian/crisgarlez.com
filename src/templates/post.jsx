import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout/GeneralLayout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";

import { slugify } from "../utils/helpers";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout>
        <div className="flex flex-col items-center py-6">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="w-8/12 container px-8">
            <article>
              <header>
                <div>
                  <div className="p-8">
                    <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
                    <div className="">
                      <div className="mb-4">
                        Por{" "}
                        <Link to="/about" className="font-bold">
                          Cristhian García
                        </Link>{" "}
                        el <time className="text-sm">{post.date}</time>
                      </div>
                      {post.tags && (
                        <div className="tags">
                          {post.tags.map((tag) => (
                            <Link
                              key={tag}
                              to={`/tags/${slugify(tag)}`}
                              className="p-2 bg-secondary rounded mr-2 text-accent"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </header>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        categories
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
