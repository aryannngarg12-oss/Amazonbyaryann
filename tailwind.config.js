/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          dark: '#131921',
          light_dark: '#232f3e',
          yellow: '#febd69',
          orange: '#f08804',
          orange_button: '#ffd814',
          orange_hover: '#f7ca00',
          buy_now: '#ffa41c',
          buy_now_hover: '#fa8900',
          blue_link: '#007185',
          price_red: '#b12704',
          bg: '#eaeded',
        }
      }
    },
  },
  plugins: [],
}
