/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#C9C9C9",
      ash: {
        300: "#F5F5F5",
        400: "#EEEEEE",
      },
      red: {
        300: "#FFE5E5",
        400: "#850E10",
        500: "#999999",
      },
    },
  },
  plugins: [],
};

