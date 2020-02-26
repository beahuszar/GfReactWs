import React from 'react';
import { connect } from 'react-redux';
import { removeAllTags } from '../actions/tagActions';

const TagsRemoveAll = ({ removeAllTags }) => {
  return (
    <div>
      <h1>Remove All Tags</h1>
      <button type="button" onClick={() => removeAllTags()}>
        Remove tags
      </button>
    </div>
  );
};

export default connect(null, { removeAllTags })(TagsRemoveAll);
