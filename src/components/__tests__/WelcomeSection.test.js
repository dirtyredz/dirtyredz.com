import React from 'react';
import WelcomeSection from '../WelcomeSection';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<WelcomeSection/>);
});