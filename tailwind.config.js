/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-1": "url('./assets/about-1.jpg')",
        "about-2": "url('./assets/about-2.jpg')",
        "about-3": "url('./assets/about-3.jpg')",
        "price-1": "url('./assets/pricing-1.jpg')",
        "price-2": "url('./assets/pricing-2.jpg')",
        "price-3": "url('./assets/pricing-3.jpeg')",
        "price-4": "url('./assets/pricing-4.jpg')",
      },
    },
    screens: {
      phone: "425px",
      sm: "640px",
      md: "768px	",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
