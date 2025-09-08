/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Original N83 Colors
        "n83-black": "#000000",
        "n83-white": "#ffffff",
        "n83-blue": "#2563eb",
        "n83-gray-50": "#f9fafb",
        "n83-gray-100": "#f1f4f7",
        "n83-gray-600": "#4b5563",
        "n83-gray-900": "#111827",

        // New Dark Theme Palette
        "dark-100": "#0a0a0a",
        "dark-200": "#111111",
        "dark-300": "#1a1a1a",
        "dark-400": "#2a2a2a",

        // Neon Accent System
        "neon-primary": "#00ff88",
        "neon-secondary": "#ff0080",
        "neon-tertiary": "#00d4ff",
        "neon-warning": "#ffff00",

        // Text Hierarchy for Dark Theme
        "text-primary": "#ffffff",
        "text-secondary": "#e0e0e0",
        "text-tertiary": "#a0a0a0",
        "text-muted": "#606060",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        sans: ["var(--font-body)"],
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      maxWidth: {
        container: "1800px",
      },
      spacing: {
        container: "clamp(1.5rem, 4vw, 3rem)",

        1: "0.8rem",
        2: "1.6rem",
        3: "2.4rem",
        4: "3.2rem",
        6: "4.8rem",
        8: "6.4rem",
        12: "9.6rem",
        16: "12.8rem",
        "golden-sm": "1.618rem",
        "golden-md": "2.618rem",
        "golden-lg": "4.236rem",
        "golden-xl": "6.854rem",
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite alternate",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "pulse-neon": {
          "0%": {
            boxShadow:
              "0 0 5px theme(colors.neon-primary), 0 0 10px theme(colors.neon-primary), 0 0 15px theme(colors.neon-primary)",
          },
          "100%": {
            boxShadow:
              "0 0 10px theme(colors.neon-primary), 0 0 20px theme(colors.neon-primary), 0 0 30px theme(colors.neon-primary)",
          },
        },
        glow: {
          "0%": { textShadow: "0 0 5px theme(colors.neon-primary)" },
          "100%": {
            textShadow:
              "0 0 20px theme(colors.neon-primary), 0 0 30px theme(colors.neon-primary)",
          },
        },
      },
    },
  },
  plugins: [],
};
