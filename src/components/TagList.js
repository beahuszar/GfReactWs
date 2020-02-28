import React, { useContext } from 'react';
import { connect } from 'react-redux';
import ThemeContext, { themes } from '../context/ThemeContext';

const TagList = ({ tags, removeTag }) => {
  const tagStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 15px',
    margin: '5px 15px'
  };
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>Tags</h1>
      {tags.map(tag => {
        return (
          <div style={tagStyle} key={tag}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};

export default connect(mapStateToProps)(TagList);
