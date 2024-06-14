/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cream': '#F3EAC0',
        'blue': '#1E2640',
        'rose': '#922C40',
        'sun': '#DC9750',
      },
      fontFamily: {
        header: ['Jomhuria'],
        body: ['Jomolhari']
      }
    },
  },
  plugins: [],
};
