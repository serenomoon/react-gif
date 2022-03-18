import React from 'react'
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem"

describe('<GifGridItem.js /> Testing', () => {
    
    
    const title = 'Hola soy Aldo';
    const url = 'http://hola.com/soyaldo.jpg';
    
    const wrapper = shallow(<GifGridItem title={title} url={url} />);


    test('Debe mostrar el snapshot correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });


    test('El contenido del parrafo debe ser igual al {title}', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });


    test('El tag img debe tener las propiedades src y alt igual a {title} y {url}', () => {
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });


    test('el div debe tener la class animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);

    });

});