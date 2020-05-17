import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from './Navbar';


describe('<Navbar />', () => {
   

   it('Should Render', () => {
       const wrapper = shallow(<Navbar />)
       expect(wrapper.length).toBe(1);
       expect(wrapper.childAt(0).length).toBe(1);
   })
  
})