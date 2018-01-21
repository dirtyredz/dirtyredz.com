import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter  } from 'react-router-dom'
import { mount } from 'enzyme';

it('renders without crashing', () => {
  //Bypass ReferenceError: SVGElement is not defined
  global.SVGElement = global.Element;

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    );
});
