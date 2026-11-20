module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        multiverse: {
          blue: '#2563EB',
          blueDark: '#1D4ED8',
          blueLight: '#EFF6FF',
          blueHover: '#1E40AF',
          red: '#DC2626',
          redDark: '#B91C1C',
          redLight: '#FEF2F2',
          redHover: '#991B1B',
          dark: '#0B132B',
          navy: '#0F172A',
          cardGlass: 'rgba(255, 255, 255, 0.85)',
          teal: '#2563EB',
          tealLight: '#EFF6FF',
          tealHover: '#1D4ED8',
          pink: '#DC2626',
          pinkLight: '#FEF2F2',
        }
      },
      boxShadow: {
        'skeuo': '0 8px 20px rgba(37, 99, 235, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.15)',
        'skeuo-red': '0 8px 20px rgba(220, 38, 38, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.15)',
        'skeuo-pink': '0 8px 20px rgba(220, 38, 38, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.15)',
        'skeuo-card': '0 12px 30px -10px rgba(37, 99, 235, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(37, 99, 235, 0.08)'
      }
    }
  }
};
