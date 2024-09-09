import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () =>{
    const initialState = [{
        id:1,
        description: 'demo todo',
        done: false,
    }]

    test('debe debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {} );
        expect(newState).toBe(initialState);
    });

    test('debe debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                description: 'nuevo todo 2',
                done: false,
            }
        }

        const newState = todoReducer( initialState, action );
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('debe debe de eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect(newState.length).toBe(0);
        //expect(newState).toContain(action.payload);

    });

    test('debe debe de realizar el cambio un todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        //expect(newState.length).toBe(2);
        //expect(newState).toContain(action.payload);
        expect(newState[0].done).toBe(true);

    });

});