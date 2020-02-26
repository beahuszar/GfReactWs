import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/amountActions';

const Resetter = props => {
  return (
    <>
      <h1>The Resetter</h1>
      <button type="button" onClick={() => props.reset()}>
        Reset
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { reset })(Resetter);
