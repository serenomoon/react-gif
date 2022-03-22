import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";



describe('Test useFetchGifs', () => {
    
    test('should return intial state', async() => {
    
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data , loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });

    test('should return array with img and loading to false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data , loading } = result.current;
        

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );

    });

});