/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: [
//     "./src/**/*.html",
//     "./src/**/*.js",
//     // Add other file types as needed
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
