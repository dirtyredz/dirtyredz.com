import React from 'react';
import ReactDOM from 'react-dom';
import Angles from '../Angles';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    //Bypass ReferenceError: SVGElement is not defined
    global.SVGElement = global.Element;

    const div = document.createElement('div');
    ReactDOM.render(<Angles/>, div);

    jest.useFakeTimers()
    const wrapper = shallow(<Angles/>);

    const spy = jest.spyOn(Angles.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();

    expect(setTimeout).toBeCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1);
});