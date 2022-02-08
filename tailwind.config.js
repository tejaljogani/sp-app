module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'red': '#A1151A',
        'yellow': '#D7B344',
        'cb0007': '#CB0007'
      },
      fontSize: {
        '18': ['18px', {
          lineHeight: '24px'
        }],
        '18x75': ['18.75px', {
          lineHeight: '19.48px'
        }],
        '20': ['20.75px', {
          lineHeight: '21.56px'
        }],
        '23': ['23px', {
          lineHeight: '30.57px'
        }],
        '37': ['37px', {
          lineHeight: '49.17px'
        }],
        '62': ['62px', {
          lineHeight: '60.7px',
          fontWeight: '400'
        }],
        '80': ['80px', {
          lineHeight: '87px',
          fontWeight: '400'
        }]
      },
      padding: {
        '10px': '10px',
        '11px': '11px',
        '20px': '20px',
        '30px': '30px',
        '37px': '37px',
        '100px': '100px',
        '35px': '35px',
        '56px': '56px',
        '70px': '70px',
      },
      margin: {
        '30px': '30px',
        '50px': '50px',
        '14px': '14px',
        '16px': '16px'
      },
      letterSpacing: {
        '.01': '0.01em'
      },
      dropShadow: {
        '3xl': 'drop-shadow(0px 0px 34px rgba(0, 0, 0, 0.32))',
      },
      maxWidth: {
        '315px': '315px',
        '468px': '468px',
        '261px': '261px',
        '320px': '320px',
        '555px': '555px'
      },
      spacing: {
        '172px': '172px',
        '250px': '250px',
        '279px': '279px',
        '460px': '460px',
        '220px': '220px',
        '260px': '260px',
        '317px': '317px',
      },
      minHeight: {
      },
      inset: {
        '80px': '80px',
        '70px': '70px',
        '40px': '40px',
        '-130px': '-130px',
        '-25px': '-25px',
        '20px': '20px',
        '30px': '30px',
        '-40px': '-40px',
        '-90px': '-90px',
        '64px': '64px'
      },
      fontFamily: {
        'playFairDisplay': ['"Playfair Display"', 'serif'],
        'NiveauGrotesk': ['"Niveau Grotesk"', 'serif']
      }
    },
  },
  plugins: [],
}
