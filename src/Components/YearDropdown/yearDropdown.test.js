import React from 'react';
import { shallow, mount } from 'enzyme';
import YearDropdown from './yearDropdown';
import { jssPreset } from '@material-ui/core';

describe('It renders <year',() => {
   const yearProps = {
    yearList: [2011,2012,2011],
    getYearSelection: jest.fn(),
    widthInput: false,
    item: 2011
    }

    const Composition = (props) => {
        return <YearDropdown {...yearProps} />
    }
    it('allows us to select Year', () => {
        const wrapper = mount(<Composition />);
        expect(wrapper.length).toBe(1)
    })

    it('should trigger getYearSelection on change', () => {
        const wrapper = mount(<Composition />);
        wrapper.find("input").simulate("change")
        expect(yearProps.getYearSelection).toHaveBeenCalled()
    })
});