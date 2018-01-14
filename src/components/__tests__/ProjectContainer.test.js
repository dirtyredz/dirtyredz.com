import React from 'react';
import ProjectContainer from '../ProjectContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<ProjectContainer/>);
});