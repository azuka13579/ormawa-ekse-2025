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
<<<<<<< HEAD
                biru: "#16CDD8",
<<<<<<< HEAD
<<<<<<< HEAD
                coklat: "#A83F27",
=======
>>>>>>> b7fe374 (update)
=======
                coklat: "#A83F27",
>>>>>>> f6dc351 (Update Dulu Mang)
=======
<<<<<<< HEAD
                biru: "#16CDD8",
                coklat: "#A83F27",
=======
                primary6: "#248DA8",
>>>>>>> 947de2c32cf72b0af2873536d2dd29747f0bf79d
>>>>>>> 9433adc2a006949527ed4dcd36d6d3bafa0a2fd2
            },

            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                rowdies: ["Rowdies", "cursive"],
            },
        },
    },
    plugins: [],
};
