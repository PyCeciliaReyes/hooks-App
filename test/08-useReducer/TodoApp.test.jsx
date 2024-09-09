import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos')

describe('Prueba en el TodoApp', () => {

    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'todo 1', donde: false},
            {id: 2, description: 'todo 2', donde: true}
        ], 
        todosCount:2, 
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn(), 
    });

    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp/>);
        expect( screen.getByText('todo 1') ).toBeTruthy();
        expect( screen.getByText('todo 2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
        //screen.debug();
    });
});