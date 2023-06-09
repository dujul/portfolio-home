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
                "bg-nav": "#272A37",
                "link": "#CECECE",
                "bg-page": "#292D3E",
                "primary": "#FCA7EA",
            },
            letterSpacing: {
                "snug": "0.7em",
            },
        },
    },
    plugins: [],
    safelist: [
        "border-primary",
        "text-primary"
    ],
}
