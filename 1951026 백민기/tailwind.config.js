/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-cold": "#E3FDFD",
        "custom-winter": "#CBF1F5",
      },
      fontFamily: {
        rix: ["RixInooAriDuriR", "sans-serif"],
      },
      boxShadow: {
        "text-shadow":
          "1px 1px #000, 2px 2px #000, 3px 3px #000, 4px 4px #000, 5px 5px #000, 6px 6px #000",
      },
    },
  },
  plugins: [],
};
