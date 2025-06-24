/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure all your React files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        ample: ["'Ample Display'", "sans-serif"], // Custom font
      },
      colors: {
        // Optional: add custom colors if needed
        blue: {
          500: '#1E40AF', // Tailwind Blue
          600: '#1E3A8A', // Darker Blue for buttons or hover
        },
      },
    },
  },
  plugins: [],
};
