import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    important: true,
    theme: {
        extend: {
            screens: {
                sm: "365px",
                md: "976px",
                lg: "1024px",
                xl: "1180px",
                "2xl": "1510px",
            },
            colors: {
                black_1: "#090D16",
                primary: "#326CF5",
                secondary: "#5D6880",
                white: "#E6EBF5",
                red: "#F56058",
                container: "#0D1321",
                container_accent: "#121B2E",
                blue_dark: "#0C1B3D",
                blue_dark_stroke: "#18243D",
            },
        },
    },
};
