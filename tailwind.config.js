module.exports = {
  theme: {
    extend: {
      colors: {
      'dark-blue' : 'hsl(209, 23%, 22%)',
      'very-dark-blue' : 'hsl(207, 26%, 17%)',
      'dark-gray': 'hsl(0, 0%, 52%)'
      },
      gap: {
        '11': '2.75rem',
        '15': '4rem',
       },
       gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(180px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
        
      
    },
  },
};
