import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { toggleDisplayTodo } from '../actions/TodoActions'
import {List} from 'material-ui/List';

class TodoList extends Component {
    toggleDisplay = (e) => {
        toggleDisplayTodo(e.target.id)
    }
    render() {
        return (
            <div>
                <List>
                    {this.props.todos.map(function (todo, key) {
                        if (todo.active && this.props.filter === 'all') {
                            return <TodoItem key={key} todo={todo} />
                        } else if (todo.active && todo.completed === 'checked' && this.props.filter === 'completed') {
                            return <TodoItem key={key} todo={todo} />
                        } else if (todo.active && todo.completed === '' && this.props.filter === 'pending') {
                            return <TodoItem key={key} todo={todo} />
                        } else {
                            return null
                        }
                    }.bind(this))}
                </List>
                <div>
                    <ul>
                        <li id="all" onClick={this.toggleDisplay}>All - ({this.props.todos.filter(i => i.active).length})</li>
                        <li id="completed" onClick={this.toggleDisplay}>Completed - ({this.props.todos.filter(i => i.completed === 'checked' && i.active).length})</li>
                        <li id="pending" onClick={this.toggleDisplay}>Pending - ({this.props.todos.filter(i => i.completed !== 'checked' && i.active).length})</li>
                    </ul></div>
            </div>
        )
    }
}
function mapStateToProps(appState) {
    return {
        todos: appState.todos,
        filter: appState.filter
    }
}
export default connect(mapStateToProps)(TodoList)