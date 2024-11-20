/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  
  ],
  theme: {
    extend: {},
    animation: {
      'slow-spin': 'spin 1s linear infinite',
      'slow2-spin': 'spin 3s linear infinite',
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

