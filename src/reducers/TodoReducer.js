let ADD_TODO = 'ADD_TODO'
let COMPLETE_TODO = 'COMPLETE_TODO'
let REMOVE_TODO = 'REMOVE_TODO'

let initialState = {
    todos: []
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_TODO:
            return {...state,todos:[...state.todos,action.todo]}
        default:
            return state
    }
}