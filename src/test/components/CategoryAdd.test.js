import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { CategoryAdd } from '../../components/CategoryAdd';


describe('Pruebas en <CategoryAdd />', () => {
    
    const setCategory = jest.fn(); //simula ser una funcion
    let wrapper = shallow(<CategoryAdd setCategory={setCategory}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategory={setCategory}/>);
    })

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


    test('No debe postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategory ).not.toHaveBeenCalled();

    });


    test('Debe llamar el setCategory y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        
        wrapper.find('input').simulate('change' , { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledTimes(1);
        expect( setCategory ).toHaveBeenCalledWith( expect.any(Function));

        expect( wrapper.find('input').prop('value')).toBe('');

    });
});