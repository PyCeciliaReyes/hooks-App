import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm.js', () => {

    const initialForm = {
        name: 'ceci',
        email: 'prueba@prueba.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const {result} = renderHook(  () => useForm(initialForm) );
        //console.log(result)
        expect(result.current).toEqual({
            formState: initialForm,
            name: 'ceci',
            email: 'prueba@prueba.com',
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newName = 'ceci1'
        const {result} = renderHook(  () => useForm(initialForm) );
        const {onInputChange} = result.current;


        act(() => {
            onInputChange({target: {name: 'name', value: newName}})
        })
        expect(result.current.name).toBe( newName);
        expect(result.current.formState.name).toBe( newName );
    });
    test('debe de realizar el reset del formulario', () => {
        const newName = 'ceci1'
        const {result} = renderHook(  () => useForm(initialForm) );
        const {onResetForm, onInputChange} = result.current;


        act(() => {
            onInputChange({target: {name: 'name', value: newName}})
            onResetForm();
        })

        expect(result.current.name).toBe( initialForm.name);
        expect(result.current.formState.name).toBe( initialForm.name);
    });
});