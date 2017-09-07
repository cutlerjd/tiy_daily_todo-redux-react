import React, { Component } from 'react'
import { checkTodo, removeTodo } from '../actions/TodoActions'
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

class TodoItem extends Component {
    handleChange = (e) => {
        checkTodo(this.props.todo.id)
    }
    handleDelete = (e) => {
        removeTodo(this.props.todo.id)
    }
    render() {
        return (
            <ListItem 
                primaryText={this.props.todo.title}
                leftCheckbox={<Checkbox checked={this.props.todo.completed} onCheck={this.handleChange} />}
                rightIconButton={<RaisedButton onClick={this.handleDelete} label="Delete"/>}
            />
        )
    }
}

export default TodoItem