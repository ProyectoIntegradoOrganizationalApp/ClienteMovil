import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const { getItem } = useLocalStorage();
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const getStoredTheme = async () => {
      try {
        const storedTheme = await getItem("theme");
        if (storedTheme) {
          setTheme(storedTheme.slice(1, -1));
        }
      } catch (error) {
        setTheme("light");
      }
    };
    getStoredTheme();
  }, []);

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
