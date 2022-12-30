import React, { useState, useEffect } from "react";
import ThemeContext, { initialThemeState } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const localStorage = window.localStorage;
  const [theme, setTheme] = useState(
    localStorage.getItem("globalTheme") || initialThemeState.theme
  );

  useEffect(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
