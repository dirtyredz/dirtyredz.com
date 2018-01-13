import React from 'react';
import DesktopNavigation from '../DesktopNavigation';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<DesktopNavigation/>);
});