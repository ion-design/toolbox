import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          focus: "var(--primary-focus)",
          darkest: "var(--primary-darkest)",
          foreground: "var(--primary-foreground)",
          darker: "var(--primary-darker)",
          dark: "var(--primary-dark)",
          DEFAULT: "var(--primary-base)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
          lightest: "var(--primary-lightest)",
        },
        secondary: {
          focus: "var(--secondary-focus)",
          darkest: "var(--secondary-darkest)",
          foreground: "var(--secondary-foreground)",
          darker: "var(--secondary-darker)",
          dark: "var(--secondary-dark)",
          DEFAULT: "var(--secondary-base)",
          light: "var(--secondary-light)",
          lighter: "var(--secondary-lighter)",
          lightest: "var(--secondary-lightest)",
        },
        danger: {
          focus: "var(--danger-focus)",
          darkest: "var(--danger-darkest)",
          foreground: "var(--danger-foreground)",
          darker: "var(--danger-darker)",
          dark: "var(--danger-dark)",
          DEFAULT: "var(--danger-base)",
          light: "var(--danger-light)",
          lighter: "var(--danger-lighter)",
          lightest: "var(--danger-lightest)",
        },
        state: {
          success: "var(--state-success)",
          foreground: "var(--state-foreground)",
          warning: "var(--state-warning)",
          error: "var(--state-error)",
          information: "var(--state-information)",
          away: "var(--state-away)",
          feature: "var(--state-feature)",
          neutral: "var(--state-neutral)",
          verified: "var(--state-verified)",
        },
        base: {
          DEFAULT: "var(--base)",
          foreground: "var(--base-foreground)",
          stroke: "var(--base-stroke)",
        },
        soft: {
          DEFAULT: "var(--soft)",
          foreground: "var(--soft-foreground)",
          stroke: "var(--soft-stroke)",
        },
        weak: {
          DEFAULT: "var(--weak)",
          foreground: "var(--weak-foreground)",
          stroke: "var(--weak-stroke)",
        },
        sub: {
          DEFAULT: "var(--sub)",
          foreground: "var(--sub-foreground)",
          stroke: "var(--sub-stroke)",
        },
        shadow: {
          low: "var(--shadow-low)",
          medium: "var(--shadow-medium)",
          high: "var(--shadow-high)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        "radius-none": "var(--radius-none)",
        "radius-xs": "var(--radius-xs)",
        "radius-sm": "var(--radius-sm)",
        radius: "var(--radius-base)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)",
        "radius-full": "var(--radius-full)",
      },
    },
  },
  plugins: [],
};
export default config;
