/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}"
];
export const theme = {
  extend: {
    minWidth: {
      '1280': '1280px'
    },
    maxWidth: {
      '1920': '1920px'
    },
    height: {
      'screen-vh': '100vh'
    }
  },
  screen: {
    'md' : '1280px',
    'lg' : '1280px'
  },
  fontFamily: {
   baseFont: ["Noto Sans KR", "sans-serif"]
  }
};
export const plugins = [];

