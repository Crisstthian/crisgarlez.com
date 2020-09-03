import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pl-2">
      <code>
        <span className="text-domain-text">crisgarlez@www</span>:<span className="text-directory-text">~</span>$ ls -l
        <br/>
        total 11344
        <br/>
        {`drwxr-xr-x 1 crisgarlez crisgarlez  905 Oct 22 2013 `}
        <Link
          to="https://github.com/Crisstthian"
          className="text-accent-text"
        >
          github/
        </Link>
        <br/>
        {`drwxr-xr-x 1 crisgarlez crisgarlez  905 Oct 10 2013 `}
        <Link
          to="https://github.com/Crisstthian"
          className="text-accent-text"
        >
          linkedin/
        </Link>
        <br/>
        {`drwxr-xr-x 1 crisgarlez crisgarlez  905 Oct 14 2013 `}
        <Link
          to="https://github.com/Crisstthian"
          className="text-accent-text"
        >
          twitter/
        </Link>
        <br/>
        {`drwxr-xr-x 1 crisgarlez crisgarlez  905 Sep 19 2016 `}
        <Link
          to="https://github.com/Crisstthian"
          className="text-accent-text"
        >
          facebook/
        </Link>
        <br/>
        {`drwxr-xr-x 1 crisgarlez crisgarlez  905 Apr 22 2016 `}
        <Link
          to="https://github.com/Crisstthian"
          className="text-accent-text"
        >
          instagram/
        </Link>
        <br/>
        <span className="text-domain-text">crisgarlez@www</span>:<span className="text-directory-text">~</span>$
      </code>
    </div>
  </Layout>
)

export default IndexPage
