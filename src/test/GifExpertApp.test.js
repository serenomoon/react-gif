import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Test <GifExpertApp />', () => {
    
    test('should show correct snapshot', () => {
        
        const wrapper = shallow( < GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should a list of categories', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( < GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });

});