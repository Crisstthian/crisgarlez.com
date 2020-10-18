import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {
  }
})

const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    function loadTheme() {
      const localTheme = localStorage.getItem("theme")
      return localTheme || "dark"
    }

    setTheme(loadTheme())
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
