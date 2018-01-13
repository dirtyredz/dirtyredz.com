import React from 'react';
import MobileNavigation from '../MobileNavigation';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<MobileNavigation MenuToggled={true}/>);
    shallow(<MobileNavigation MenuToggled={false}/>);
});