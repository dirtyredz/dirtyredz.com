import React from 'react';
import ReactDOM from 'react-dom';
import DirtyServerManager from '../DirtyServerManager';

it('renders without crashing', () => {
  //Bypass ReferenceError: SVGElement is not defined
  global.SVGElement = global.Element;

  const div = document.createElement('div');
  ReactDOM.render(<DirtyServerManager />, div);
});
