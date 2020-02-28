import React, { useContext } from 'react';
import { connect } from 'react-redux';
import ThemeContext, { themes } from '../context/ThemeContext';

const ComplexCounter = ({ complexValue }) => {
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>ComplexCounter</h1>
      <p style={{ color: currentTheme.textColor }}>{complexValue}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    complexValue: state.counter + state.tags.length
  };
};

export default connect(mapStateToProps)(ComplexCounter);
