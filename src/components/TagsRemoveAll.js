import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { removeAllTags } from '../actions/tagActions';
import ThemeContext, { themes } from '../context/ThemeContext';

const TagsRemoveAll = ({ removeAllTags }) => {
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>Remove All Tags</h1>
      <button
        type="button"
        onClick={() => removeAllTags()}
        style={{
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor
        }}
      >
        Remove tags
      </button>
    </div>
  );
};

export default connect(null, { removeAllTags })(TagsRemoveAll);
