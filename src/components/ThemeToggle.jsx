
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeProvider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
    else { // system
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark');
    }
  };
  
  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 transition-all ${isDarkMode ? 'text-muted-foreground' : 'text-yellow-500'}`} />
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className={`h-5 w-5 transition-all ${isDarkMode ? 'text-blue-500' : 'text-muted-foreground'}`} />
    </div>
  );
}
