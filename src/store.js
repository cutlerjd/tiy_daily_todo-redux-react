import {createStore} from 'redux'
import TodoReducer from './reducers/TodoReducer'

let store = createStore(TodoReducer)

export default store