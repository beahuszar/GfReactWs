import React from 'react';
import Increaser from './Increaser';
import Decreaser from './Decreaser';
import Resetter from './Resetter';
import Setter from './Setter';
import TagList from './TagList';
import TagAdd from './TagAdd';
import TagRemove from './TagRemove';
import ComplexCounter from './ComplexCounter';
import TagsRemoveAll from './TagsRemoveAll';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from '../context/ThemeContext';

const themes = {
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

const App = () => {
  return (
    <ThemeProvider value={themes.light}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Increaser />
        <Decreaser />
        <Resetter />
        <Setter />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TagList />
        <TagAdd />
        <TagRemove />
        <ComplexCounter />
        <TagsRemoveAll />
      </div>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
