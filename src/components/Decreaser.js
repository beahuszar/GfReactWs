import React from 'react';
import { connect } from 'react-redux';
import { decrease } from '../actions/amountActions';

const Decreaser = props => {
  return (
    <>
      <h1>The Decreaser</h1>
      <p>{props.counter}</p>
      <button type="button" onClick={() => props.decrease()}>
        Decrease
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { decrease })(Decreaser);
