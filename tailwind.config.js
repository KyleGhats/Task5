/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Need to add your colors inside the extend property if you still want to use the tailwindCSS colors
    // Putting it outside will disable the default colors of tailwindCSS
    extend: {
      colors: {
        primaryColor: "#1B424C",
      },
    },
  },
  plugins: [],
};
