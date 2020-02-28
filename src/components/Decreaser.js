import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { decrease } from '../actions/amountActions';
import ThemeContext, { themes } from '../context/ThemeContext';

const Decreaser = props => {
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>The Decreaser</h1>
      <p style={{ color: currentTheme.textColor }}>{props.counter}</p>
      <button
        type="button"
        onClick={() => props.decrease()}
        style={{
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor
        }}
      >
        Decrease
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { decrease })(Decreaser);
