import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E0001A",
          ink: "#0B0F1A",
          paper: "#FFFFFF",
          nordic: "#0A2342",
          mist: "#F4F5F7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
