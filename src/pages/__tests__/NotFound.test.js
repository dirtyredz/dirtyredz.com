import React from 'react';
import NotFound from '../NotFound';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<NotFound />);
});
