import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 36, height: 36 }} />;
  }

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getIcon = () => {
    if (theme === "light") return <Sun size={18} />;
    if (theme === "dark") return <Moon size={18} />;
    return <Monitor size={18} />;
  };

  return (
    <button
      onClick={cycleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}. Click to change.`}
    >
      {getIcon()}
    </button>
  );
}
