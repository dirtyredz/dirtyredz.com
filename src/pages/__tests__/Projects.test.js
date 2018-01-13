import React from 'react';
import Projects from '../Projects';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Projects />);
});