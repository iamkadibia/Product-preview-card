/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(212, 21%, 14%)",
        "grayish-blue": "hsl(228, 12%, 48%)",
        "dark-cyan": "hsl(158, 36%, 37%)",
        "darkar-cyan": "hsl(158, 36%, 27%)",
      },

      fontFamily: {
        fraunces: ['"Fraunces", "sans-serif"'],
        montserrat: ['"Montserrat", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
