import React from 'react';

const ThemeSwitcher = props => {
  return (
    <div>
      <h1>Theme Switcher</h1>
      <form>
        <button
          type="button"
          style={{ display: 'block', width: '150px' }}
          onClick={() => {
            props.onSwitch('light');
          }}
        >
          Light
        </button>
        <button
          type="button"
          style={{ display: 'block', width: '150px' }}
          onClick={() => {
            props.onSwitch('dark');
          }}
        >
          Dark
        </button>
      </form>
    </div>
  );
};

export default ThemeSwitcher;
