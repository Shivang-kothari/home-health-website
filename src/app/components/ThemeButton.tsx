"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeKey = "blue" | "teal" | "indigo" | "emerald" | "slate";

const THEMES: Array<{ key: ThemeKey; label: string; swatch: string }> = [
  { key: "blue", label: "Blue", swatch: "linear-gradient(135deg,#1d4ed8,#0ea5e9)" },
  { key: "teal", label: "Teal", swatch: "linear-gradient(135deg,#0f766e,#06b6d4)" },
  { key: "indigo", label: "Indigo", swatch: "linear-gradient(135deg,#4f46e5,#0ea5e9)" },
  { key: "emerald", label: "Emerald", swatch: "linear-gradient(135deg,#059669,#22c55e)" },
  { key: "slate", label: "Slate", swatch: "linear-gradient(135deg,#334155,#64748b)" },
];

const STORAGE_KEY = "site_theme";

export default function ThemeButton() {
  const defaultTheme = useMemo<ThemeKey>(() => "blue", []);
  const [theme, setTheme] = useState<ThemeKey>(defaultTheme);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
      const next = saved && THEMES.some((t) => t.key === saved) ? saved : defaultTheme;
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
    } catch {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [defaultTheme]);

  function apply(next: ThemeKey) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <details className="relative hidden md:block">
      <summary className="list-none cursor-pointer rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-black/5 backdrop-blur hover:bg-white focus:outline-none">
        Theme
      </summary>
      <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
        <div className="p-2">
          <div className="px-2 pb-2 text-xs font-semibold text-slate-500">Light themes</div>
          <div className="grid gap-1">
            {THEMES.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => apply(t.key)}
                className={[
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-black/5",
                  theme === t.key ? "bg-black/5 text-[color:var(--heading)]" : "",
                ].join(" ")}
              >
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-md ring-1 ring-black/10" style={{ background: t.swatch }} />
                  {t.label}
                </span>
                {theme === t.key ? <span className="text-xs text-slate-500">Selected</span> : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}

