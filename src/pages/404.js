import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Opps!" />
    <div className="pl-2">
      <code>
        <span className="text-domain-text">crisgarlez@www</span>:<span className="text-directory-text">~</span>$ 404
        <br/>
        <br/>
        <span className="text-danger-text">
          {`página no encontrada, quiso decir:`}
        </span>
        <br/>
        <br/>
        {`página de '`}
        <Link
          to="/"
          className="text-accent-text"
        >
          inicio
        </Link>
        {`' para ir al inicio del sitio web`}
        <br/>
        <br/>
        <span className="text-domain-text">crisgarlez@www</span>:<span className="text-directory-text">~</span>$
      </code>
    </div>
  </Layout>
)

export default NotFoundPage
