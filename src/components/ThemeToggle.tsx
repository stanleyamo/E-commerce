import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
            )}
        </button>
    );
}
