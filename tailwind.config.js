/** @type {import('tailwindcss').Config} */
import DaisyUI from "daisyui";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#026885",
        dark: "#0f172a",
        secondary: "#003f53",
        dark_sec: "#64748b",
      },
      fontFamily: {
        poppins: ["Poppins"],
        firaMono: ["Fira Mono"],
        firaSans: ["Fira Sans"],
        firaCode: ["Fira Code"],
      },
      screens: {
        "tablet-l": "992px",
        hp: "576px",
        hmin: "425px",
        minni: "375px",
        mini: "320px",
      },
    },
  },
  plugins: [DaisyUI, scrollbar({ nocompatible: true })],
};
