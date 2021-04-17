module.exports = {
  purge: ["./src/index.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#F4F5FF",
      black: "#0C242C",
      main: "#00AFC7",
      accent: "#548491",
      line: "#73AFBF",
      error: "#CC1F00",
    },
    fontFamily: {
      sans: ['Noto Sans Japanese'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
