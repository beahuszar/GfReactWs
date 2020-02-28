import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { increase } from '../actions/amountActions';
import ThemeContext, { themes } from '../context/ThemeContext';

const Increaser = props => {
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>The Increaser</h1>
      <p data-testid="counter" style={{ color: currentTheme.textColor }}>
        {props.counter}
      </p>
      <button
        type="button"
        onClick={() => props.increase()}
        style={{
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor
        }}
      >
        Increase
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { increase })(Increaser);
