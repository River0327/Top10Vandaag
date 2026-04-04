/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#16124D',
        'royal-blue': '#1E1B6B',
        'electric-purple': '#6B1E89',
        'dark-purple': '#2D1B6B',
        'midnight': '#0A0826',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-main': 'linear-gradient(to right, #1E1B6B, #6B1E89)',
      },
    },
  },
  plugins: [],
} 