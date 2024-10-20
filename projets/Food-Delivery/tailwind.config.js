/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Inclut tous vos fichiers JavaScript et TypeScript
    './index.html', // Assurez-vous d'inclure aussi votre fichier HTML principal
  ],
  theme: {
    extend: {}, // Vous pouvez étendre le thème ici si nécessaire
  },
  plugins: [], // Ajoutez des plugins si besoin
}
