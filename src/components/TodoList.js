import React, { Component } from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {console.log(this.props.todos)}
                    {this.props.todos.map(function(todo,key){
                        if(todo.active){
                        return <TodoItem key={key} todo={todo}/>
                        } else{
                            return null
                        }
                    }.bind(this))}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(appState){
    return {
        todos:appState.todos
    }
}
export default connect(mapStateToProps)(TodoList)