import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import { ThemeContext } from '../../context/themeContext';

import SunIcon from '../../../static/icons/sun.svg'
import MoonIcon from '../../../static/icons/moon.svg'


const ConsoleHeader = ({ siteTitle }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav className="flex flex-col items-center py-6">
      <div className="w-full container px-4">

        <div className="flex justify-between">
          <div className="w-11/12 flex items-center justify-center">
            <Link
              to="/"
              className="py-3 rounded mr-1"
            >
              {siteTitle}
            </Link>
          </div>
          <div className="w-1/12 flex items-center justify-end">
            <button
              type="button"
              onClick={toggleMode}
              className="py-3 rounded focus:outline-none focus:shadow-outline-purple"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

ConsoleHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ConsoleHeader.defaultProps = {
  siteTitle: `crisgarlez@www:~`,
}

export default ConsoleHeader
