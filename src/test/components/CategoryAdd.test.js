import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { CategoryAdd } from '../../components/CategoryAdd';


describe('Pruebas en <CategoryAdd />', () => {
    
    const setCategories = () => {};
    const wrapper = shallow(<CategoryAdd setCategories={setCategories}/>);

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });


    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change' , { target: { value } });

        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);

    });

});