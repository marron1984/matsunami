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
        'off-white': '#F5F5F3',
        'dark-grey': '#1A1A1A',
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
