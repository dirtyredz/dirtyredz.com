import React from 'react';
import SmallDRLogo from '../SmallDRLogo';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<SmallDRLogo/>);
});