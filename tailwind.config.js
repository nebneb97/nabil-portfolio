/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",  // For traditional pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // For any reusable components
    "./src/**/*.{js,ts,jsx,tsx}", // If you keep components/pages in /src
  ],
  theme: {
    container:{
        center: true,
        padding:"15px",
    },
    screens:{
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px"
    },
    extend: {},
    
  },
  plugins: [],
}