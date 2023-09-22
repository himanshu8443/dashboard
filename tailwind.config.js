/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#76c9c1",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/assets/background.svg')",
      }),
    },
  },
  plugins: [],
};
