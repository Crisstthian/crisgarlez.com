import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";

import SunIcon from "../../../static/icons/sun.svg";
import MoonIcon from "../../../static/icons/moon.svg";
import Logo from "../../../static/logos/logo.png";

const Header = ({ siteTitle }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="flex flex-col items-center py-6">
      <div className="w-8/12 container px-8">
        <div className="flex justify-between">
          <div className="flex items-start">
            <Link
              to="/"
              className="-ml-5 px-5 py-3 rounded mr-1 hover:bg-secondary"
            >
              <span className="flex">
                <img className="w-6 mr-1" src={Logo} alt="Logo" />
                <span className="font-semibold text-lg">
                  Cristhian García Vélez
                </span>
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleMode}
              className="px-5 py-3 rounded focus:outline-none focus:shadow-outline-purple hover:bg-secondary -mr-5"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Cristhian García`,
};

export default Header;
