import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el componente TodoItem', () => {

    const todo = {
        id: 1,
        description: 'piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe de mostrar el todo pendiente', () =>{

        render(<TodoItem 
                    todo = {todo} 
                    onDeleteTodo = {onDeleteTodoMock} 
                    onToggleTodo = {onToggleTodoMock} 
                />)
        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const span = screen.getByLabelText('span');
        //console.log(span.innerHTML);
        expect(span.className).toContain('aling-self-center ');
        expect(span.className).not.toContain('text-decoration-line-through');
        //screen.debug();
        
    });
});