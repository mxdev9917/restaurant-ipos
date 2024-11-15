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
    // animation: {
    //   'spin-fast': 'spin 0.4s linear infinite', // Faster spin
    // },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

