import React from 'react';
import ProjectContainer from '../ProjectContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<ProjectContainer/>);
    const spy = jest.spyOn(ProjectContainer.prototype, 'componentWillMount');
    //Not Working ?!?!?!?
    wrapper.instance().windowObject = null
    let test = wrapper.instance().componentWillMount();
    expect(spy).toHaveBeenCalled();

});