import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition-all duration-200 shadow-sm cursor-pointer"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-amber-400 animate-in fade-in zoom-in-75 duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 animate-in fade-in zoom-in-75 duration-300" />
      )}
    </button>
  );
}