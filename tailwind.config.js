/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    colors: {
      azulOscuro: "#02122C",
      blanco: "#ffffff",
      azulClaro: "#165BA6",
      amarillo: "	#FFFF00",
    },
    extend: {},
    screens: {
      sm: "420px",
      // => @media (min-width: 420px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  // other settings
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
};
