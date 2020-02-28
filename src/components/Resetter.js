import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/amountActions';
import ThemeContext, { themes } from '../context/ThemeContext';

const Resetter = props => {
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>The Resetter</h1>
      <button
        type="button"
        onClick={() => props.reset()}
        style={{
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor
        }}
      >
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { reset })(Resetter);
