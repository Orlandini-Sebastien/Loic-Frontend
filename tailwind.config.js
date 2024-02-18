/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'vert-loic' : '#9ED270'
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

