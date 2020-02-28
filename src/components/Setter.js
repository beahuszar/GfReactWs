import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { set } from '../actions/amountActions';
import ThemeContext, { themes } from '../context/ThemeContext';

const Setter = props => {
  const [inputValue, setInputValue] = useState(0);
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>The Setter</h1>
      <form>
        <input
          type="number"
          onChange={event => setInputValue(event.target.value)}
        ></input>
        <button
          type="button"
          onClick={() => props.set(inputValue)}
          style={{
            backgroundColor: currentTheme.buttonColor,
            color: currentTheme.textColor
          }}
        >
          Set
        </button>
      </form>
    </div>
  );
};

export default connect(null, { set })(Setter);
