module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },

      xl: { max: "1280px" },
      "2xl": { max: "1536px" }
    },
    extend: {
      colors: {
        "color-primary": "#191a1b",
        "color-secondary": "#4b6cc1",
        "color-third": "#ababab",
        "color-white": "#ffffff"
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit,minmax(4rem,140px))"
      },
      animation: {
        "fade-in": "fadeIn ease-in 0.4s finite"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(-10%)" },
          to: { opacity: 1, transform: "translateY(0)" }
        }
      },
      boxShadow: {
        "3xl": "rgb(0 0 0) 0px 13px 15px -13px"
      }
    }
  },
  plugins: []
};
