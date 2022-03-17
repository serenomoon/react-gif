import React from 'react'
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import { GifGridItem } from "../../components/GifGridItem"

describe('<GifGridItem.js /> Testing', () => {
    
    let wrapper = shallow(<GifGridItem />)

    test('Debe mostrar el snapshot correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

});