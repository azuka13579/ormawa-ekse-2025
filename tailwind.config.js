import defaultTheme from 'tailwindcss/defaultTheme';

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
                biru:'#16CDD8',
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                rowdies: ["Rowdies", "cursive"],
            },
        },
    },
    plugins: [],
};
