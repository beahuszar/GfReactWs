import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTag } from '../actions/tagActions';

const TagAdd = props => {
  const [tag, setTag] = useState('');

  return (
    <div>
      <h1>Add Tag</h1>
      <form>
        <input
          type="text"
          onChange={event => setTag(event.target.value)}
          value={tag}
        ></input>
        <button type="button" onClick={() => props.addTag(tag)}>
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
