import React from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../actions/tagActions';

const TagRemove = ({ tags, removeTag }) => {
  const tagStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px 15px',
    margin: '5px 15px'
  };

  return (
    <div>
      <h1>Remove Tags</h1>
      {tags.map(tag => {
        return (
          <div style={tagStyle} key={tag} onClick={() => removeTag(tag)}>
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

export default connect(mapStateToProps, { removeTag })(TagRemove);
