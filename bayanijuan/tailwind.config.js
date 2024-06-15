/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./registration_form.html","./src/**/*.{js,ts,jsx,tsx}",
            'node_modules/flowbite-react/lib/esm/**/*.js'
          ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cream': '#F3EAC0',
        'blue': '#1E2640',
        'rose': '#922C40',
        'sun': '#DC9750',
        primary: {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f","950":"#451a03"}
      },
      fontFamily: {
        header: ['Jomhuria'],
        body: ['Jomolhari']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
