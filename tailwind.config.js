module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      "frost-bite": "hsl(322, 87%, 55%)",
      "outrageous-orange": "hsl(13, 100%, 64%)",
      "dark-blue-gray": "hsl(234, 25%, 52%)",
      "yankee-blue": "hsl(233, 54%, 16%)",
      "roman-silver": "hsl(232, 10%, 56%)",
      "sasquatch-socks": "hsl(341, 92%, 62%)",
      "carnation-pink": "hsl(341°, 100%, 83%)",
      "ultramarine-blue": "hsl(237, 100%, 64%)",
    },
    extend: {},
  },
  plugins: [],
};
