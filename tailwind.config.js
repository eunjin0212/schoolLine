/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        purple: {
          '01': '#F1E9F6',
          '02': '#C172F5',
          '03': '#A051D4',
          '04': '#8A3FBB',
          '05': '#501D82',
          '06': '#4A2379',
        },
        green: {
          '01': '#F2FDDD',
          '02': '#ECFFC8',
          // #E7F3CC
          '03': '#D2F290',
          '04': '#CFEF8E',
          '05': '#99E300',
          '06': '#85C500',
          '07': '#8DC21F',
          '08': '#4E7400',
          '09': '#046535',
        },
        gray: {
          '01': '#FAFAFA',
          '02': '#F5F5F5',
          '03': '#F2F2F2',
          '04': '#F1F1F1',
          '05': '#F7F9FD',
          '06': '#B3B3B3',
          '07': '#787878',
          '08': '#9E9E9E',
          '09': '#595959',
          '10': '#343434',
          '11': '#1D1D1D',
        },
      },
      screens: {
        sm: '375px',
        md: '640px',
        lg: '1008px',
        xl: '1920px',
      },
      fontFamily: ['Pretendard JP']
    },
  },
  plugins: [],
}

