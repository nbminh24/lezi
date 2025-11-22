/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'phone': '0 40px 80px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.1)',
                'card': '0 20px 60px -15px rgba(0, 0, 0, 0.08)',
                'soft': '0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                'diffuse': '0 20px 60px -15px rgba(0, 0, 0, 0.08)',
            },
        },
    },
    plugins: [],
}
