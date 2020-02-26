import React from 'react';
import { connect } from 'react-redux';
import { increase } from '../actions/amountActions';

const Increaser = props => {
  return (
    <>
      <h1>The Increaser</h1>
      <p>{props.counter}</p>
      <button type="button" onClick={() => props.increase()}>
        Increase
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { increase })(Increaser);
