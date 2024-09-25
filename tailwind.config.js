/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    boxShadow: {
      "3xl": "0 0px 30px 6px rgba(0, 0, 0, 0.3)",
    },
    width: {
      '100' : "26rem",
    },
  },
};
export const plugins = [];
