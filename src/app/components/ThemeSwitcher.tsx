"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "hrms_theme";

type ThemeKey = "blue" | "slate" | "indigo" | "emerald";

const themes: Array<{ key: ThemeKey; label: string }> = [
  { key: "blue", label: "Blue" },
  { key: "slate", label: "Slate" },
  { key: "indigo", label: "Indigo" },
  { key: "emerald", label: "Emerald" },
];

export default function ThemeSwitcher() {
  const defaultTheme = useMemo<ThemeKey>(() => "blue", []);
  const [value, setValue] = useState<ThemeKey>(defaultTheme);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
      const initial = saved && themes.some((t) => t.key === saved) ? saved : defaultTheme;
      setValue(initial);
      document.documentElement.setAttribute("data-theme", initial);
    } catch {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [defaultTheme]);

  function onChange(next: ThemeKey) {
    setValue(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <label className="hidden items-center gap-2 md:flex">
      <span className="text-xs font-semibold text-slate-600">Theme</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ThemeKey)}
        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]"
        aria-label="Theme"
      >
        {themes.map((t) => (
          <option key={t.key} value={t.key}>
            {t.label}
          </option>
        ))}
      </select>
    </label>
  );
}

