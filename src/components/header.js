import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import { ThemeContext } from '../context/themeContext';

import SunIcon from '../icons/sun.svg'
import MoonIcon from '../icons/moon.svg'


const Header = ({ siteTitle }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header className="flex items-center justify-between py-4">
      <div className="text-center w-full">
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="">
        <button
          onClick={toggleMode}
          className="rounded-md focus:outline-none focus:shadow-outline-purple px-4"
        >
          {theme === 'dark' ? (
            <SunIcon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <MoonIcon className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `crisgarlez@www:~`,
}

export default Header
