import React from 'react';
import Increaser from './Increaser';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

let store = createStore(reducers);

test('Should render button text', () => {
  let { getByText, getByTestId } = render(
    <Provider store={store}>
      <Increaser />
    </Provider>
  );

  expect(getByText('Increase')).toBeInTheDocument();
  expect(getByText('The Increaser')).toBeInTheDocument();
  expect(getByTestId('counter')).toHaveTextContent('0');
  fireEvent.click(getByText('Increase'));
  expect(getByTestId('counter')).toHaveTextContent('1');
});
