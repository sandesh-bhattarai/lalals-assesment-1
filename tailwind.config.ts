import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter",'sans-serif']
      },
      boxShadow: {
        'custom-bg': '0px 0px 30px 0px #0000004D', // Custom shadow for the page
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          950: "#13191F"
        },
        shades: {
          700: "#858b98",
          800: "#59616A",

        }
      },
    },
  },
  plugins: [],
} satisfies Config;
