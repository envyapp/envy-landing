import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "relative flex h-8 w-16 items-center rounded-full p-1 transition-colors",
        isDark ? "bg-zinc-700" : "bg-zinc-200",
      )}
      aria-label="Toggle theme"
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center transition-opacity",
          isDark ? "opacity-100" : "opacity-40",
        )}
      >
        <Moon className="h-4 w-4 text-zinc-400" />
      </div>

      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center transition-opacity",
          isDark ? "opacity-40" : "opacity-100",
        )}
      >
        <Sun className="h-4 w-4 text-yellow-500" />
      </div>

      <div
        className={cn(
          "absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-200",
          isDark ? "left-1" : "left-9",
        )}
      />
    </button>
  );
}
