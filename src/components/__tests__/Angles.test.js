import React from 'react';
import ReactDOM from 'react-dom';
import Angles from '../Angles';
import { shallow } from 'enzyme';

const Element = { style: { transform: ''} }

const obj = {
    getElementsByClassName: ()=>{return [Element]},
    getBoundingClientRect: ()=>{return { top: 0 }},
    getElementsByTagName: ()=>{return [obj,obj]},
    getAttribute: ()=>{return 0},
    style: { transform: '' }
}

const OldGetElementsByClassName = document.getElementsByClassName
document.getElementsByClassName = ()=>{return [obj,obj]}

it('renders without crashing', () => {
    //Bypass ReferenceError: SVGElement is not defined
    global.SVGElement = global.Element;

    const div = document.createElement('div');
    ReactDOM.render(<Angles/>, div);

    jest.useFakeTimers()
    const wrapper = shallow(<Angles/>);

    let spy = jest.spyOn(Angles.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(Angles.prototype, 'ResetAngle');
    wrapper.instance().ResetAngle(obj,'');
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(Angles.prototype, 'SetAngle');
    wrapper.instance().SetAngle(Element,0,0);
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(Angles.prototype, 'AnglesScroll');
    wrapper.instance().AnglesScroll();
    expect(spy).toHaveBeenCalled();
    document.body.scrollTop = 500
    spy = jest.spyOn(Angles.prototype, 'AnglesScroll');
    wrapper.instance().AnglesScroll();
    expect(spy).toHaveBeenCalled();

    document.getElementsByClassName = OldGetElementsByClassName
});