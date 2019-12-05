import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './dashboard'



afterEach(rtl.cleanup)

it('renders without crashing', () => {
const wrapper = rtl.render(<Dashboard />)
wrapper.debug()

});


