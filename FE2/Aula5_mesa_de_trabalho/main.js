const themes = {
    light: {
      background: 'white',
      text: 'black',
    },
    dark: {
      background: 'black',
      text: 'white',
    }
  };


  function setTheme(newTheme) {
    const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
  
    Object.keys(themeColors).map(function(key) {
      html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
    });
  }