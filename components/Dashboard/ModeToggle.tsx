"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ModeToggle;
