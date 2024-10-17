/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclure tous les fichiers pertinents
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Couleur principale
        secondary: '#14171A', // Couleur secondaire
        accent: '#F5A623', // Couleur d'accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Police personnalisée
      },
      spacing: {
        128: '32rem', // Espacement personnalisé
        144: '36rem',
      },
      backdropBlur: {
        xs: '2px', // Flou de fond personnalisé
        sm: '4px',
        md: '12px',
        lg: '20px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
