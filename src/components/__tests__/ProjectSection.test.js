import React from 'react';
import ProjectSection from '../ProjectSection';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<ProjectSection/>);
});