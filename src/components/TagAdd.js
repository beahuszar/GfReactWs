import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { addTag } from '../actions/tagActions';
import ThemeContext, { themes } from '../context/ThemeContext';

const TagAdd = props => {
  const [tag, setTag] = useState('');
  const theme = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.background, padding: '10px' }}>
      <h1 style={{ color: currentTheme.textColor }}>Add Tag</h1>
      <form>
        <input
          type="text"
          onChange={event => setTag(event.target.value)}
          value={tag}
        ></input>
        <button
          type="button"
          onClick={() => props.addTag(tag)}
          style={{
            backgroundColor: currentTheme.buttonColor,
            color: currentTheme.textColor
          }}
        >
          Add Tag
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};

export default connect(mapStateToProps, { addTag })(TagAdd);
