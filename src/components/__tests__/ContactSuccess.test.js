import React from 'react';
import ReactDOM from 'react-dom';
import ContactSuccess from '../ContactSuccess';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactSuccess/>, div);
});