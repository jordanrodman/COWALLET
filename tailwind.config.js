/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { poppins: "Poppins" } },
    colors: {
      white: "#fff",
      blue: "#1a44ff",
      gray: "#6a6a6a",
      indigo: {
        "100": "#0064fa",
        "200": "#1334ca",
        "300": "#1234ca",
        "400": "#0e258d",
        "500": "#162461",
        "600": "rgba(13, 27, 90, 0.96)",
      },
      violet: "#2088e8",
    },
    fontSize: {
      sm: "11px",
      base: "15px",
      lg: "16px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "25px",
      "4xl": "30px",
      "5xl": "100px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
    },
  },
  corePlugins: { preflight: false },
};
