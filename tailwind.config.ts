import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wenge': '#5D576B',
        'baby-powder': "#FAFAFA",
        'raisin-black': '#2E2E3A',
        'english-violet': "#D496A7"
      }
    },
  },
  plugins: [],
};
export default config;
