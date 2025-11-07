// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'container',
        'section-pad',
        'section-pad-lg',
        'h0',
        'h1',
        'h2',
        'p-lg',
        'p-sm',
        'btn',
        'btn-primary',
        'btn-ghost',
        'btn-lg',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
