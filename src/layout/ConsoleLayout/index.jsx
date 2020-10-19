import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import config from "../../../data/SiteConfig"
import { ThemeContext } from "../../context/themeContext"
import ConsoleHeader from "../../components/ConsoleHeader"

const ConsoleLayout = ({ children }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary text-primary transition-all duration-300 m-0 p-0 min-h-screen`}
    >
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <ConsoleHeader />
      <div className="p-2">
        {children}
      </div>
    </div>
  )
}

ConsoleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ConsoleLayout
