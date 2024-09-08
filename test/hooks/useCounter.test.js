import { act, fireEvent, render, renderHook } from "@testing-library/react";
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

    test('debe de incrementar el contador', () => {
        const {result} = renderHook( () => useCounter(initialValue) );
        const {increment} = result.current;
        act( () => {
            increment();
        })
        expect(result.current.counter).toBe(101);
    });

    test('debe de decrementar el contador', () => {
        const {result} = renderHook( () => useCounter(initialValue) );
        const {decrement} = result.current;
        act( () => {
            decrement();
        })
        expect(result.current.counter).toBe(99);
    });

    test('debe de hacer el reset del contador', () => {
        const {result} = renderHook( () => useCounter(initialValue) );
        const {reset,increment} = result.current;
        act( () => {
            increment();
            reset();
        })
        expect(result.current.counter).toBe(100);
    });
});