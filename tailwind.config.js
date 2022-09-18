module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {

      },
      padding: {
        '1.3': '0.39rem'
      },
      width: {
        'hBorder': '91.5%',
        '27': '6.6rem'
      },
      maxWidth: {
        '5.5xl': '72rem'
      },
      borderWidth: {
        '3Rem': '0.25rem',
        '4Rem': '0.28rem',
      },
      margin: {
        'neg.5': '-0.5rem',
        'neg1' : '-1rem',
      },
      fontSize: {
        '2.5xl': '1.65rem',
        '4.5xl': '2.6rem'
      },
      height: {
        '93/100': '93%'
      },
      colors: {
        'primary': '#fff',
        'secondary': '#3D3D3D',
        'primaryText': '#272727',
        'secondaryText': '#fff',
        'footer': '#808080',
        'red': '#BB2222',
        'yellow': '#FFC42C',
        'background': '#EBEBEB',
        'footerText': '#C8C8C8',
        'footer': '#808080'
      },
      transitionDuration: {
        '50': '50ms'
      }
    },
    fontFamily: {
      'filter': ['Darker Grotesque', 'sans-serif'],
      'body': ['Oswald', 'sans-serif'],
    },
  },
  plugins: [],
}