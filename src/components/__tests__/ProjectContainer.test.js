import React from 'react';
import { shallow } from 'enzyme';
import ProjectContainer from '../ProjectContainer';

it('renders without crashing', () => {
    shallow(<ProjectContainer id='MockTest' to='MockTest' title='MockTest' year='MockTest' context='MockTest' ProjectRole='MockTest'/>);
});