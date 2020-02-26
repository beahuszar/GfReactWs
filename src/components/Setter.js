import React, { useState } from 'react';
import { connect } from 'react-redux';
import { set } from '../actions/amountActions';

const Setter = props => {
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

export default connect(null, { set })(Setter);
