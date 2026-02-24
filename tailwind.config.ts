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
        'off-white': '#FAF8F5',
        'warm-beige': '#F0EBE3',
        'warm-sand': '#E8E0D4',
        'warm-gray': '#B8AFA6',
        'dark-grey': '#2C2825',
        'dark-warm': '#1F1C19',
        'accent-warm': '#C4A882',
        'accent-soft': '#D4C4AD',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'soft': '1rem',
        'softer': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 30px rgba(196, 168, 130, 0.08)',
        'warm-lg': '0 10px 50px rgba(196, 168, 130, 0.12)',
        'warm-xl': '0 20px 60px rgba(196, 168, 130, 0.15)',
        'glow': '0 0 40px rgba(196, 168, 130, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
