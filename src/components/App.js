import React, { useState } from 'react';
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
import ThemeContext from '../context/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');

  const themeSetter = color => {
    setTheme(color);
  };

  return (
    <ThemeContext.Provider value={theme}>
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
      <ThemeSwitcher onSwitch={themeSetter} />
    </ThemeContext.Provider>
  );
};

export default App;
