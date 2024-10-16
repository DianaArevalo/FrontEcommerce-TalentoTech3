/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Esto parece estar bien
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Victor Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
