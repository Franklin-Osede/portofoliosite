import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '360px', // Extra-extra small devices (small phones)
        'xs': '475px', // Extra small devices (phones)
        'sm': '640px', // Small devices (small tablets, large phones)
        'md': '768px', // Medium devices (tablets)
        'lg': '1024px', // Large devices (small laptops)
        'xl': '1280px', // Extra large devices (laptops, desktops)
        '2xl': '1536px', // Extra extra large devices (large desktops)
        '3xl': '1920px', // Very large screens
        '4xl': '2560px', // Ultra large screens (4K monitors)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
