import Script from "next/script";

export default function ThemeInitScript() {
  // Runs before interactive to minimize theme flash.
  return (
    <Script
      id="theme-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(() => {
  try {
    const key = "hrms_theme";
    const saved = localStorage.getItem(key);
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  } catch {}
})();
        `.trim(),
      }}
    />
  );
}

