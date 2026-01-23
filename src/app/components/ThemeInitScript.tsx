export default function ThemeInitScript() {
  // Apply saved theme early to avoid flash.
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
(() => {
  try {
    const key = "site_theme";
    const saved = localStorage.getItem(key);
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    else document.documentElement.setAttribute("data-theme", "blue");
  } catch {
    document.documentElement.setAttribute("data-theme", "blue");
  }
})();
        `.trim(),
      }}
    />
  );
}

