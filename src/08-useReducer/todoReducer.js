export const todoReducer = (initialState, action) => {
    switch(action.type) { 
        case 'ABC':
            throw new Error('ACtion.type = ABC np esta implementada');
        default:
            return initialState;
    }
}