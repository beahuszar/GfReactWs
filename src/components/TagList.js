import React from 'react';
import { connect } from 'react-redux';

const TagList = ({ tags }) => {
  const tagStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 15px',
    margin: '5px 15px'
  };

  return (
    <div>
      {tags.map(tag => {
        return <div style={tagStyle}>{tag}</div>;
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
