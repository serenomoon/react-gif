import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba <GifGrid />', () => {
    
    const category = 'Hola Mundo'
    

    test('Debe mostrar correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id : '123',
            title : 'Cualquie cosa',
            url: 'http://localhost/cualquiercosa.jpg'
        },
        {
            id : '456',
            title : 'Cualquie cosa 2',
            url: 'http://localhost/cualquiercosa2.jpg'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });

});