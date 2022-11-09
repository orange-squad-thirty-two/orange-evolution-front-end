/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['36px', '36px'],
    },
    backgroundImage: {
      'login-not': 'none',
      'login-gradient':
        'linear-gradient(324.33deg, #FF7823 1.18%, rgba(255, 120, 35, 0) 50.24%)',
    },
    extend: {},
  },
  plugins: [],
};
