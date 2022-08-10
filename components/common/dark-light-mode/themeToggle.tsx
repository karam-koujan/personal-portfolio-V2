import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = useThemeContext();
  const handleTheme = (theme: string) => {
    return () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  };
  return (
    <div
      className="transition duration-500 ease-in-out rounded-full p-2"
      tabIndex={0}
    >
      {theme === "dark" ? (
        <FaSun
          onClick={handleTheme(theme)}
          className="text-color-white dark:text-color-white text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={handleTheme(theme)}
          className="text-color-secondary dark:text-color-white text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
