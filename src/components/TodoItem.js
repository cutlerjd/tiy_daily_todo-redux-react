import React, { Component } from 'react'
import {checkTodo,removeTodo} from '../actions/TodoActions'

class TodoItem extends Component {
    handleChange = (e) => {
        checkTodo(e.target.id)
    }
    handleDelete = (e) => {
        removeTodo(e.target.id)
    }
    render() {
        return (
                <li><input type="checkbox" className="filled-in" id={this.props.todo.id} checked={this.props.todo.completed} onChange={this.handleChange}/>{this.props.todo.title} -- <b id={this.props.todo.id} onClick={this.handleDelete}>DELETE</b></li>	
                )
    }
}

export default TodoItem