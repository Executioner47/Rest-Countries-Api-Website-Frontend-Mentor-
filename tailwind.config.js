/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "--clr-Dark-Blue-DMode": "#2B3945",
        "--clr-Very-Dark-Blue-DMode": "#202C37",
        "--clr-Very-Dark-Blue-LMode": "#111517",
        "--clr-Dark-Gray-LMode": "#858585",
        "--clr-Very-Light-Gray-LMode": "#FAFAFA",
        "--clr-White-DLMode": "#FFFFFF",
      },
      fontFamily: {
        cfont: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
