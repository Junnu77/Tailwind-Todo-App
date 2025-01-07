import { createContext, useState } from "react";

const ThemeContext = createContext();

// provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    theme ? setTheme(false) : setTheme(true);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
