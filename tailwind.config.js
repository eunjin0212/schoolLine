/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        purple: {
          '01': '#501D82',
          '02': '#8A3FBB',
          '03': '#A051D4',
          '04': '#C172F5',
          '05': '#F1E9F6',
        },
        green: {
          '01': '#4E7400',
          '02': '#8DC21F',
          '03': '#85C500',
          '04': '#99E300',
          '05': '#CFEF8E',
          '06': '#D2F290',
          '07': '#ECFFC4',
          '08': '#F2FDDD',
        },
        gray: {
          '01': '#FAFAFA',
          '02': '#F5F5F5',
          '03': '#F2F2F2',
          '04': '#F1F1F1',
          '05': '#9E9E9E',
          '06': '#787878',
          '07': '#595959',
          '08': '#343434',
          '09': '#1D1D1D',
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

