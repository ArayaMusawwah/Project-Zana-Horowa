import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      serif: ["var(--font-cardo)", "serif"],
      wellfare: ["Welfare", "cursive"],
      thorsa: ["Thorsa", "serif"],
      greatVibes: ["var(--font-great-vibes)", "cursive"],
      edu: ["var(--font-edu)", "sans-serif"],
    },
    extend: {
      colors: {
        main: {
          100: "#D9ABAB",
          110: "#C17B7B",
          120: "#B14A4A",
          200: "#962071",
          300: "#F7E7DC",
          text: "#f3f4f6",
          accent: "#FFEBD4",
        },
        dark: {
          text: "#3f3131",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideRight: "slideRight 0.3s ease-out",
        "draw-line": "draw-line 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
