/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "n83-black": "#000000",
        "n83-white": "#ffffff",
        "n83-blue": "#2563eb",
        "n83-gray-50": "#f9fafb",
        "n83-gray-600": "#4b5563",
        "n83-gray-900": "#111827",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      maxWidth: {
        container: "1800px",
      },
      spacing: {
        container: "clamp(1.5rem, 4vw, 3rem)",
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        200: "200ms",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
  },
  plugins: [],
};
