import React, { useState } from 'react';
import { connect } from 'react-redux';
import { set } from '../actions/amountActions';

const Resetter = props => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <h1>The Setter</h1>
      <form>
        <input
          type="text"
          onChange={event => setInputValue(event.target.value)}
        ></input>
        <button type="button" onClick={() => props.set(inputValue)}>
          Set
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};
export default connect(mapStateToProps, { set })(Resetter);
