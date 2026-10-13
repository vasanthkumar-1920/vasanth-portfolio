/** @type {import('tailwindcss').Config} */
const ink = { 50: '#F6F2EA', 100: '#EDE8DD', 200: '#DDD6C8', 300: '#C4BCAB', 400: '#A39B8A', 500: '#7D7667', 600: '#5A5448', 700: '#3E3A31', 800: '#2A2722', 900: '#1D1B17', 950: '#14120F' };
const ember = { 50: '#FFF3ED', 100: '#FFE2D4', 200: '#FFC4A9', 300: '#FF9E73', 400: '#FF7A47', 500: '#F2511F', 600: '#D63D12', 700: '#B02F0E', 800: '#80220B', 900: '#571708', 950: '#330D04' };
const lime = { 50: '#F7FDE4', 100: '#EDFAC3', 200: '#E0F596', 300: '#D2F06E', 400: '#C4E94F', 500: '#A8CE33', 600: '#86A826', 700: '#667F1F', 800: '#4B5F1B', 900: '#3A4A19', 950: '#1D280A' };
const sand = { 50: '#FEF9EB', 100: '#FCF0CC', 200: '#F9E19A', 300: '#F5CF66', 400: '#EFB93D', 500: '#DD9E22', 600: '#BC7B19', 700: '#975A19', 800: '#7B481B', 900: '#673C1B', 950: '#3B1F0A' };
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: { xs: '475px', sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    extend: {
      colors: { slate: ink, gray: ink, zinc: ink, neutral: ink, indigo: ember, violet: ember, purple: ember, blue: ember, brand: ember, emerald: lime, teal: lime, green: lime, cyan: sand, sky: sand },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      animation: { fadeIn: 'fadeIn .25s ease-out both', slideUp: 'slideUp .5s ease-out both', marquee: 'marquee 80s linear infinite' },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
