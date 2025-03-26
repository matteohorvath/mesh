import { createContext, useContext, useEffect } from "react";
import { useConfig } from "@/lib/config";

const ThemeContext = createContext({ dark: true });

export function ThemeProvider({ children }) {
  const { appearance } = useConfig();
  const dark = true; // Always dark mode

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("color-scheme-unset");
  }, []);

  return (
    <ThemeContext.Provider value={{ dark }}>{children}</ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
