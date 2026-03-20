/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Carlito', 'Open Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#05193c',
          2: '#0a224a',
          3: '#102b58',
          4: '#163466',
        },
        brandBlue: {
          DEFAULT: '#1ba8fa',
          dim: '#0091ea',
          pale: 'rgba(27, 168, 250, 0.08)',
        },
      },
    },
  },
  plugins: [],
};
