import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby";
import Layout from "../layout"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"

class Landing extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <div className="pl-2">
          <code>
            <span className="text-domain-text">crisgarlez@www</span>
            :
            <span className="text-directory-text">~</span>
            $ ls
            -l
            <br />
            total 11344
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Oct 18 2020 `}
            <Link
              to="/blog"
              className="text-accent-text"
            >
              blog/
            </Link>
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Oct 25 2016 `}
            <a
              href="https://github.com/crisgarlez"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              github/
            </a>
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Aug 11 2019 `}
            <a
              href="https://www.twitch.tv/crisgarlez"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              twitch/
            </a>
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Jul 20 2017 `}
            <a
              href="https://www.linkedin.com/in/crisgarlez/"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              linkedin/
            </a>
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Oct 14 2018 `}
            <a
              href="https://twitter.com/crisgarlez"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              twitter/
            </a>
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Apr 22 2018 `}
            <a
              href="https://www.instagram.com/crisgarlez/"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              instagram/
            </a>
            <br />
            {`drwxr-xr-x 1 `}
            <span className="hidden md:inline">{` crisgarlez crisgarlez  `}</span>
            {`905 Sep 19 2011 `}
            <a
              href="https://www.facebook.com/crisgarlez"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              facebook/
            </a>
            <br />
            <span className="text-domain-text">crisgarlez@www</span>
            :
            <span className="text-directory-text">~</span>
            $
          </code>
        </div>
      </Layout>
    )
  }
}

export default Landing

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
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
            date
          }
        }
      }
    }
  }
`
