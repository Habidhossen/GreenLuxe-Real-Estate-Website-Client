/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA920",
        secondary: "#00c194",
        heading: "#343a40",
        body: "#6c757d",

        // blue: "#007bff",
        // indigo: "#6610f2",
        // purple: "#6f42c1",
        // pink: "#e83e8c",
        // red: "#dc3545",
        // orange: "#fd7e14",
        // yellow: "#ffc107",
        // green: "#28a745",
        // teal: "#20c997",
        // cyan: "#17a2b8",
        // white: "#fff",
        // black: "#000",
        // gray: "#6c757d",

        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",

        lightGrey: "#fafafa",
        lightBlue: "#eaf6f6",
        lightOrange: "#feead1",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
