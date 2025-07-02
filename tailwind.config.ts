import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Assets/**/*.{js,ts,jsx,tsx,mdx}", // ✅ tambahkan ini
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F7F0E5",
      },

      fontFamily: {
        kaushian: ["var(--font-kaushan-script)"],
        niramit: ["var(--font-niramit)"],
        niramitbold: ["var(--font-niramit-bold)"],
        niramitmedium: ["var(--font-niramit-medium)"],
        niramitsemibold: ["var(--font-niramit-semibold)"],
      },
    },
  },
  plugins: [],
};
export default config;
