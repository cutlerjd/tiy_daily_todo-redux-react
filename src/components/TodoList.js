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
                        return <TodoItem key={key} todo={todo}/>
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