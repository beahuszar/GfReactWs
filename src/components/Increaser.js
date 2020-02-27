import React from 'react';
import { connect } from 'react-redux';
import { increase } from '../actions/amountActions';

const Increaser = props => {
  return (
    <div>
      <h1>The Increaser</h1>
      <p data-testid="counter">{props.counter}</p>
      <button type="button" onClick={() => props.increase()}>
        Increase
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { increase })(Increaser);
