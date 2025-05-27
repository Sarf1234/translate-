// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
    width: {
      'px4': '4px',
    },
    height: {
      'px4': '4px',
    },
    animation: {
      gradient: 'gradientShift 6s ease-in-out infinite',
    },
    keyframes: {
      gradientShift: {
        '0%, 100%': {
          'background-position': '0% 0%',
        },
        '50%': {
          'background-position': '100% 100%',
        },
      },
    },
  },
}
,
  plugins: [],
};
