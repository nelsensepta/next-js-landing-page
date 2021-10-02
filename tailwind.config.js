module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "bookmark-dark": "#111810",
        "bookmark-dark-second": "#0F1703",
        "title-dark": "#E2E8F0",
        "title-dark-second": "#A3A3A3",
        "red-dark": "#7C2D12",
        "blue-dark": "#1E3A8A",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif", "Arial"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
