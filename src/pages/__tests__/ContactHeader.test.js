import React from 'react';
import ReactDOM from 'react-dom';
import ContactHeader from '../ContactHeader';
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
  const wrapper = shallow(<ContactHeader/>);

  const spy = jest.spyOn(ContactHeader.prototype, 'componentWillMount');
  wrapper.instance().componentWillMount();
  expect(spy).toHaveBeenCalled();

  const spy2 = jest.spyOn(ContactHeader.prototype, 'handleSubmit');
  wrapper.instance().handleSubmit();
  expect(spy2).toHaveBeenCalled();
  mockXHR.onload();
  expect(wrapper.instance().state.Success).toBe(true);
});