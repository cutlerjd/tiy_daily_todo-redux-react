import store from '../store'

export function addTodo(todo){
    store.dispatch({
        type:'ADD_TODO',
        todo:todo
    })
}