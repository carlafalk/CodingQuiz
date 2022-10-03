import { createContext, ReactNode, useContext } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { colorsModel } from "../models/ColorsModel";
interface ThemeContext {
  toggleThemeIsDisabled: () => void;
  isDarkTheme: boolean;
  themeColors: colorsModel;
}

export const ThemeContext = createContext<ThemeContext>({
  toggleThemeIsDisabled: () => {},
  isDarkTheme: false,
  themeColors: {} as colorsModel,
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useAsyncStorage<boolean>("darkMode", true);

  const toggleThemeIsDisabled = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeColors = {
    deepPurple: isDarkTheme ? "#2A242F" : "#9bd175",
    darkPurple: isDarkTheme ? "#642E8A" : "#642E8A",
    lightPurple: isDarkTheme ? "#976EAC" : "#976EAC",
    lightGreen: isDarkTheme ? "#68E349" : "#68E349",
    lightGrey: isDarkTheme ? "#ACACAC" : "#ACACAC",
    mustard: isDarkTheme ? "#FFB100" : "#FFB100",
    success: isDarkTheme ? "#009806" : "#009806",
    danger: isDarkTheme ? "#9B1D20" : "#9B1D20",
    categories: {
      react: isDarkTheme ? "#2993CF" : "#0b141a",
      html: isDarkTheme ? "#FF702E" : "#FF702E",
      css: isDarkTheme ? "#057DDC" : "#057DDC",
      javaScript: isDarkTheme ? "#FFBE17" : "#FFBE17",
      typeScript: isDarkTheme ? "#0754A8" : "#0754A8",
    },
    anwserButtons: {
      purple: isDarkTheme ? "#674C7D" : "#674C7D",
      green: isDarkTheme ? "#4A9500" : "#4A9500",
      orange: isDarkTheme ? "#8F5627" : "#8F5627",
      blue: isDarkTheme ? "#0754A8" : "#0754A8",
    },
    commons: {
      white: isDarkTheme ? "#FFFFFF" : "#000000",
      black: isDarkTheme ? "#000000" : "#FFFFFF",
    },
    backgrounds: {
      superLowOpacity: isDarkTheme ? "#00000022" : "#ffffff30",
      lowOpacity: isDarkTheme ? "#000000ab" : "#ffffffab",
    },
  };
  return <ThemeContext.Provider value={{ isDarkTheme, toggleThemeIsDisabled, themeColors }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
