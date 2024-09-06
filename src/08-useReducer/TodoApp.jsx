import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'recolectar la piedra del poder',
    //     done: false,
    // },
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ]= useReducer(todoReducer, initialState, init);

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])

    const handleNewTodo = (todo) => {
        // console.log({todo})
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action )
    }

    const handleDeleteTodo = (id) => {
        //console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    };

    const handleToggleTodo = (id) => {
        //console.log(id)
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return(
        <>
            <h1>TodoApp: 10 - <small>Pendientes: 2</small> </h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>
                        <TodoList 
                            todos = {todos} 
                            onDeleteTodo = { handleDeleteTodo }
                            onToggleTodo = { handleToggleTodo } 
                        />
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};