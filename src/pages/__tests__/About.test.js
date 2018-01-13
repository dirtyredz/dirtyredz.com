import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About';

it('renders without crashing', () => {
  //Bypass ReferenceError: SVGElement is not defined
  global.SVGElement = global.Element;

  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
