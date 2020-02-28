import React from 'react';

const ThemeContext = React.createContext('light');

export const themes = {
  light: {
    buttonColor: '#7B84DB',
    textColor: '#040BDB',
    background: '#F2F2F2'
  },
  dark: {
    buttonColor: '#B84BFF',
    textColor: '#D697FF',
    background: '#5C257F'
  }
};

export default ThemeContext;
