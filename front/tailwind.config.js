/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration) linear var(--animation-direction)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        Black: {
          DEFAULT: "#000000",
          100: "#000319",
          200: "#0d0d0d",
          300: "#1a1a1a",
        },
        Gray: {
          DEFAULT: "#2a2a2a",
          100: "#3a3a3a",
          200: "#4f4f4f",
          300: "#6b6b6b",
          400: "#9e9e9e",
        },
        Primary: {
          DEFAULT: "#4f46e5",
          100: "#6366f1",
          200: "#818cf8",
        },
        Accent: {
          DEFAULT: "#10b981",
          100: "#34d399",
          200: "#6ee7b7",
        },
        Danger: {
          DEFAULT: "#ef4444",
          100: "#f87171",
        },
        White: {
          DEFAULT: "#ffffff",
          100: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
};
