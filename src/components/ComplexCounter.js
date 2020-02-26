import React from 'react';
import { connect } from 'react-redux';

const ComplexCounter = ({ complexValue }) => {
  return (
    <div>
      <h1>ComplexCounter</h1>
      <p>{complexValue}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    complexValue: state.counter + state.tags.length
  };
};

export default connect(mapStateToProps)(ComplexCounter);
