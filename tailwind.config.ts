import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: {
        '100': '24.5rem',
        '102': '26rem'
      },
      maxWidth: {
        '100': '25rem',
        '102': '26rem',
        '105': '28rem'
      },
      colors: {
        'site-base-gray':'#121212',
        'site-second-gray': '#131313',
      }
    },
  },
  plugins: [],
};
export default config;
