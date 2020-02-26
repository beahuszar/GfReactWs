import React from 'react';
import Increaser from './Increaser';
import Decreaser from './Decreaser';
import Resetter from './Resetter';
import Setter from './Setter';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
    </div>
  );
};

export default App;
