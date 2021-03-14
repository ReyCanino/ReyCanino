import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReservaForm from '../components/ReservaForm';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('render element', () => {
  act(() => {
    ReactDOM.render(<ReservaForm />, container);
  });
});