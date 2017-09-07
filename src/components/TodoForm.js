import React, { Component } from 'react'
import {addTodo} from '../actions/TodoActions'
import shortid from 'shortid'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {ListItem} from 'material-ui/List';


class TodoForm extends Component {
    state = {
        todoTitle:''
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        addTodo({
            title:this.state.todoTitle,
            active:true,
            completed:false,
            id:shortid.generate()})
        this.setState({
            todoTitle:''
        })
    }
    render() {
        return (
                <ListItem disabled={true}>
                <TextField hintText="Todo item" value={this.state.todoTitle} onChange={this.handleChange}  name="todoTitle"/> <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />
                </ListItem>	
                )
    }
}

export default TodoForm