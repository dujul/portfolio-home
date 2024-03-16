/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/model/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                quicksand: ["var(--font-quicksand)"],
            },
            colors: {
                "bg-nav": "#1e3a8a",
                "link": "#FFFFF5",
                "bg-page": "#030014",
                "primary": "#f4f0ff",
                "secondary": "#838DA5",
                "title-color":"#8a9dd1",
                "content":"#1e3a8a",
                "chip":"#1e3a8a",
                "progressbar":"#1e3a8a",
                "gradient-start":"#E6ABFF",
                "gradient-end":"#1A6DFF",
            },
            letterSpacing: {
                "snug": "0.7em",
            },
        },
    },
    plugins: [],
    safelist: [
        "border-primary",
        "text-primary",
        "primary"
    ],
}
