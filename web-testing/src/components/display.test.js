import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './display'



afterEach(rtl.cleanup)

it('renders without crashing', () => {
const wrapper = rtl.render(<Display />)
wrapper.debug()

});

afterEach(rtl.cleanup)
    it('display the ball count in numbers only', ()=> {
        const component =rtl.render(<Display balls={0}/>);
        

        const count = component.getByTestId('count');
        expect(count).toHaveTextContent('0')
    });
    