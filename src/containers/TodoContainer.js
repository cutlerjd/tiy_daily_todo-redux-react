import React, { Component } from 'react'
import TodoItem from '../components/TodoItem'
import store from '../store'

class TodoContainer extends Component {
    state = {
        todos:[]
    }
    componentWillMount(){
        store.subscribe(()=>{
            let appState = store.getState()
            this.setState({
                todos:appState.todos
            })
        })
    }
    render() {
        return (
                <div>
                    <ul>
                        {this.state.todos.map((todo) =>{
                            return <TodoItem todo={todo}/>
                        })}
                    </ul>
                </div>	
                )
    }
}

export default TodoContainer