/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll 40s linear infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(52,211,153,0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(52,211,153,0.9), 0 0 40px rgba(52,211,153,0.3)" },
        },
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(99,102,241,0.3)" },
          "50%": { borderColor: "rgba(99,102,241,0.8)" },
        },
      },
      colors: {
        Black: {
          DEFAULT: "#000000",
          100: "#000319",
          200: "#0d0d1a",
          300: "#1a1a2e",
          400: "#16213e",
        },
        Gray: {
          DEFAULT: "#2a2a3a",
          100: "#3a3a4a",
          200: "#4f4f6f",
          300: "#6b6b8b",
          400: "#9e9ebb",
        },
        Primary: {
          DEFAULT: "#4f46e5",
          100: "#6366f1",
          200: "#818cf8",
          300: "#a5b4fc",
        },
        Violet: {
          DEFAULT: "#7c3aed",
          100: "#8b5cf6",
          200: "#a78bfa",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #000319 0%, #0d0d2b 50%, #000319 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 100%)",
        "purple-glow": "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(99,102,241,0.3)",
        "glow-md": "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1)",
        "glow-lg": "0 0 50px rgba(99,102,241,0.4), 0 0 100px rgba(99,102,241,0.15)",
        "glow-green": "0 0 20px rgba(52,211,153,0.5)",
        "card": "0 4px 24px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.2)",
      },
    },
  },
  plugins: [],
};
