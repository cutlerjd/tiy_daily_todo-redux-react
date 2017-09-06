import store from '../store'

export function addTodo(todo){
    store.dispatch({
        type:'ADD_TODO',
        todo:todo
    })
}

export function checkTodo(id){
    let appState = store.getState()
    let todos = appState.todos.map(function(todo){
        if(id === todo.id){
            if(todo.completed === 'checked'){
                todo.completed = ''
            } else {
                todo.completed = "checked"
            }
        }
        return todo
    })
    store.dispatch({
        type:'CHECK_TODO',
        todos:todos
    })
}
export function removeTodo(id){
    let appState = store.getState()
    let todos = appState.todos.map(function(todo){
        if(id === todo.id){
            todo.active=false
        }
        return todo
    })
    store.dispatch({
        type:'REMOVE_TODO',
        todos:todos
    })
}

export function toggleDisplayTodo(display){
    store.dispatch(
    {type:'TOGGLE_DISPLAY',
    display:display}
    )
}