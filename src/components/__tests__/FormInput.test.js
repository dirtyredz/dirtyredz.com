import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from '../FormInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormInput/>, div);
});

it('renders without crashing', () => {
    const wrapper = shallow(<FormInput active={true}/>);

    wrapper.instance().refs = { input: { focus: jest.fn()}}
    let spy = jest.spyOn(FormInput.prototype, 'componentDidUpdate');
    wrapper.instance().componentDidUpdate();
    expect(spy).toHaveBeenCalled();

    wrapper.instance().props = {active: false}
    spy = jest.spyOn(FormInput.prototype, 'componentDidUpdate');
    wrapper.instance().componentDidUpdate();
    expect(spy).toHaveBeenCalled();
});