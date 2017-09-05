import React, { Component } from 'react'

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
        console.log(this.state.todoTitle)
        this.setState({
            todoTitle:''
        })
    }
    render() {
        return (
                <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.todoTitle} onChange={this.handleChange}  name="todoTitle"/>
                </form></div>	
                )
    }
}

export default TodoForm