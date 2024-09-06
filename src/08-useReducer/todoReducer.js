export const todoReducer = (initialState, action) => {
    
    
    
    
    
    
    
    
    switch(action.type) { 
        case '[TODO] Add Todo':
            // throw new Error('ACtion.type = ABC np esta implementada');
            return [ ...initialState, action.payload ]
        default:
            return initialState;
    }
}