/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1d29',
          secondary: '#252936',
          tertiary: '#2a2d3a',
          border: '#3a3d4a',
        },
        blue: {
          accent: '#4a9eff',
          hover: '#3a8eef',
        }
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        'mixed': 'mixed',
      }
    },
  },
  plugins: [],
}
