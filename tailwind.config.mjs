/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "close-menu": "url('../../assets/imgs/icon-close.svg')",
                "open-menu": "url('../../assets/imgs/icon-hamburger.svg')",
            },
        },
    },
    plugins: [],
};
