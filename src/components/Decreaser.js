import React from 'react';
import { connect } from 'react-redux';
import { decrease } from '../actions/amountActions';

const Decreaser = props => {
  return (
    <div>
      <h1>The Decreaser</h1>
      <p>{props.counter}</p>
      <button type="button" onClick={() => props.decrease()}>
        Decrease
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { decrease })(Decreaser);
