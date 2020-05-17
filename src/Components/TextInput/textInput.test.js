import React from 'react'
import { shallow, mount } from 'enzyme';
import TextInput from './textInput'

describe('Render <TextInput /> components with passed props', () => {
    const textProps = {
        labelText: "Foo",
        getTextValue: jest.fn(), 
        isFullWidth: false, 
        isDescription: false, 
        item: "Foo"
    }

    const Composition = (props) => {
        return < TextInput {...textProps}/>
    }
    it('should render with all props', ()=>{
        const wrapper = mount(< Composition />)
        expect(wrapper.length).toBe(1)
    })

    it('should call getTextValue on change', () => {
        const wrapper = mount(< Composition />)
        wrapper.find("input").simulate("change")
        expect(textProps.getTextValue).toHaveBeenCalled()

    })
})
