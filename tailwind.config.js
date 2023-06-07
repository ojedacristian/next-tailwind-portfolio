/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'neutral-1': '#E3E4E6',
        'neutral-2': 'rgba(227,228,230,0.55)',
        'blackgr':'#030514',
        'primary': '#C54B8C'
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '2.5rem',
        'h3': '2rem',
        'h4': '1.5rem',
        'h5': '1rem',
        'body': '1.125rem'
      }
    },
  },
  plugins: [],
}
