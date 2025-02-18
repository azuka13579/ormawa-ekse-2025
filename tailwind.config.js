import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                sakarsaBlue: "#B8F2FF",
                fontcolors: "#1B697D",
                primary1: "#b9f2ff",
                primary2: "#6ddaed",
                primary3: "#a6cdd8",
                primary4: "#1b697d",
                primary5: "#124B56",
                biru: "#16CDD8",
                coklat: "#A83F27",
                primary6: "#248DA8",
                primary7: "#16CDD8",
            },

            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                rowdies: ["Rowdies", "cursive"],
            },
        },
    },
    plugins: [],
};
