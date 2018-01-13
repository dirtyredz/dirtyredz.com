import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../Contact';
import { shallow } from 'enzyme';

const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    onload: jest.fn(),
    setRequestHeader: jest.fn(),
    status: 200
};
const oldXMLHttpRequest = window.XMLHttpRequest;
window.XMLHttpRequest = jest.fn(() => mockXHR);

it('renders without crashing', () => {
  const wrapper = shallow(<Contact/>);

  const spy = jest.spyOn(Contact.prototype, 'componentWillMount');
  wrapper.instance().componentWillMount();
  expect(spy).toHaveBeenCalled();

  const spy2 = jest.spyOn(Contact.prototype, 'handleSubmit');
  wrapper.instance().handleSubmit();
  expect(spy2).toHaveBeenCalled();
  mockXHR.onload();
  expect(wrapper.instance().state.Success).toBe(true);
});