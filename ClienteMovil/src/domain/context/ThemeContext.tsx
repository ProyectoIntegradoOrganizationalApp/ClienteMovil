import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setTheme: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("dark");

  const contextValue: ThemeContextProps = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProps, ThemeContext, ThemeContextProvider };
