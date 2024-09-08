import { render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter.js', () => {
    const initialValue = 100;

    test('debe de retornar los valores por defecto', () =>{
        const {result} = renderHook( () => useCounter() );
        console.log(result)
        console.log(result.current)
        const {counter, reset, increment, decrement} = result.current;

        expect(counter).toBe(10)
        expect(increment).toEqual( expect.any( Function ) );
        expect(decrement).toEqual( expect.any( Function ) );
        expect(reset).toEqual( expect.any( Function ) );
    });

    test('debe de generar el counter con el valor de 100', () => {
        const {result} = renderHook( () => useCounter(initialValue) );
        const {counter} = result.current;
        expect(counter).toBe(100);
    });
});