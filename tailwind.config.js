/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Lulo Clean One Bold', 'Arial', 'sans-serif'],
        'sans': ['Work Sans', 'Arial', 'sans-serif'],
        'serif': ['Bodoni Moda', 'Arial', 'sans-serif']
      },
      colors: {
        'main': {
          '50': '#fdf9e9',
          '100': '#fcf3c5',
          '200': '#fae48e',
          '300': '#f7ce4d',
          '400': '#f2b20f',
          '500': '#e39e0f',
          '600': '#c4790a',
          '700': '#9c550c',
          '800': '#814412',
          '900': '#6e3815',
          '950': '#401b08',
        },
        'sec': {
          '50': '#ebfeff',
          '100': '#cefcff',
          '200': '#a2f7ff',
          '300': '#63effd',
          '400': '#1cdcf4',
          '500': '#00bbd5',
          '600': '#0398b7',
          '700': '#0a7994',
          '800': '#126178',
          '900': '#145165',
          '950': '#063646',
        },
        // 'ter': {
        //   '50': '#fcf4ff',
        //   '100': '#f8e8ff',
        //   '200': '#f2d0fe',
        //   '300': '#eaabfc',
        //   '400': '#df79f9',
        //   '500': '#ce4bef',
        //   '600': '#b426d3',
        //   '700': '#981caf',
        //   '800': '#7e198f',
        //   '900': '#6a1a75',
        //   '950': '#45044e',
        // },
        'ter': {
          '50': '#fef1f7',
          '100': '#fee5f1',
          '200': '#ffcbe5',
          '300': '#ffa0ce',
          '400': '#ff65ac',
          '500': '#fc388b',
          '600': '#ed1566',
          '700': '#cf074c',
          '800': '#aa0a3f',
          '900': '#8e0d38',
          '950': '#57001c',
      },
      }
    },
  },
  plugins: [],
}