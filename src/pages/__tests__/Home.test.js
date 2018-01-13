import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Home />);
});
