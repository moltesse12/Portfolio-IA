"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <BsSun size={16} /> : <BsMoonStars size={16} />}
    </button>
  );
}
