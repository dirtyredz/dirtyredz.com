import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';


it('renders without crashing', () => {
    jest.useFakeTimers();

    const wrapper = shallow(<Layout/>);

    const spy = jest.spyOn(Layout.prototype, 'componentDidUpdate');
    const spy2 = jest.spyOn(Layout.prototype, 'UpdatePage');
    wrapper.instance().componentDidUpdate();
    expect(spy).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1);
    wrapper.instance().UpdatePage();
    expect(spy2).toHaveBeenCalled();
});