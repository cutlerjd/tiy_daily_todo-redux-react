let ADD_TODO = 'ADD_TODO'
let CHECK_TODO = 'CHECK_TODO'
let REMOVE_TODO = 'REMOVE_TODO'

let initialState = {
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.todo] }
        case CHECK_TODO:
            return { ...state, todos: action.todos }
        case REMOVE_TODO:
            return { ...state, todos: action.todos }
        default:
            return state
    }
}