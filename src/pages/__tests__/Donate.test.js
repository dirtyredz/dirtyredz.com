import React from 'react';
import ReactDOM from 'react-dom';
import Donate from '../Donate';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
    jest.useFakeTimers()
    const wrapper = shallow(<Donate/>);

    const spy = jest.spyOn(Donate.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();

    expect(setTimeout).toBeCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1);

    let wrapperStyle = wrapper.instance().state.RemoveOnScroll
    expect(wrapperStyle).toBe(true);
    wrapper.setState({ RemoveOnScroll: false });
    expect(wrapper.instance().state.RemoveOnScroll).toBe(false);
});