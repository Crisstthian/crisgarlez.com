/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from '../context/themeContext';
import Header from "./header"

const Layout = ({ children }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-primary text-main-text transition-all duration-300 m-0 p-0 min-h-screen`}
    >
      <div>
        <Header/>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
