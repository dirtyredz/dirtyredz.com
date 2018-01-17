import React from 'react';
import Header from '../Header';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {

    const wrapper = shallow(<Header/>);
    const spy = jest.spyOn(Header.prototype, 'handleMenuClick');

    expect(wrapper.instance().state.MenuToggled).toBe(false);
    wrapper.instance().handleMenuClick();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.MenuToggled).toBe(true);
    wrapper.instance().handleMenuClick();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.MenuToggled).toBe(false);

});