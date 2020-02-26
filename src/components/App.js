import React from 'react';
import Increaser from './Increaser';
import Decreaser from './Decreaser';
import Resetter from './Resetter';
import Setter from './Setter';
import TagList from './TagList';
import TagAdd from './TagAdd';
import TagRemove from './TagRemove';
import ComplexCounter from './ComplexCounter';
import TagsRemoveAll from './TagsRemoveAll';

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Increaser />
        <Decreaser />
        <Resetter />
        <Setter />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TagList />
        <TagAdd />
        <TagRemove />
        <ComplexCounter />
        <TagsRemoveAll />
      </div>
    </>
  );
};

export default App;
