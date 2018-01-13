import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

it('renders without crashing', () => {
    const wrapper = shallow(<Layout/>);

    const spy = jest.spyOn(Layout.prototype, 'componentDidUpdate');
    wrapper.instance().componentDidUpdate();
    expect(spy).toHaveBeenCalled();

    const spy2 = jest.spyOn(Layout.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy2).toHaveBeenCalled();
});