import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"
import { ThemeContext } from "../context/themeContext"
import Header from "../components/Header"

const Layout = ({ children }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary text-main-text transition-all duration-300 m-0 p-0 min-h-screen`}
    >
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
