/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1120",
        "ink-soft": "#1E293B",
        slate: { DEFAULT: "#5B6472", light: "#94A3B8" },
        paper: { DEFAULT: "#FFFFFF", dim: "#F6F8FB" },
        violet: { DEFAULT: "#5B5BF6", deep: "#4338CA" },
        cyan: { DEFAULT: "#06B6D4" },
        severity: {
          critical: "#DC2626",
          high: "#EA580C",
          medium: "#D97706",
          low: "#0284C7",
          safe: "#059669"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      backdropBlur: { xs: "2px" },
      boxShadow: {
        glass: "0 20px 60px -20px rgba(15,23,42,0.25)",
        card: "0 10px 30px -16px rgba(15,23,42,0.18)"
      },
      borderRadius: {
        xl2: "18px"
      }
    }
  },
  plugins: []
};
