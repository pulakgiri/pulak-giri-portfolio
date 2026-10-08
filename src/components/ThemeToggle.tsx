import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#55D6FF] ${
        theme === 'dark'
          ? 'bg-[#0E1219] border-[#202733] text-[#F4F7FB] hover:border-[#55D6FF]/50 hover:text-[#55D6FF]'
          : 'bg-[#FFFFFF] border-[#E2E8F0] text-[#0F172A] hover:border-[#2563EB]/50 hover:text-[#2563EB]'
      } ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
