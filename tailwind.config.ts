import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F3A5F",
          50: "#EEF2F8",
          100: "#D5DFF0",
          200: "#ABBFE1",
          300: "#819FD2",
          400: "#5780C3",
          500: "#1F3A5F",
          600: "#192F4C",
          700: "#132439",
          800: "#0D1926",
          900: "#060D13",
        },
        secondary: {
          DEFAULT: "#2FA4A9",
          50: "#EAF7F8",
          100: "#C8ECF0",
          200: "#91D9E0",
          300: "#5BC7D1",
          400: "#2FA4A9",
          500: "#268589",
          600: "#1C6568",
          700: "#134547",
          800: "#092626",
          900: "#040D0E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
