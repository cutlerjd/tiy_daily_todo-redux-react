import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { toggleDisplayTodo } from '../actions/TodoActions'
import { List } from 'material-ui/List';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class TodoList extends Component {

    toggleAll = (e) => {
        toggleDisplayTodo('all')
    }
    toggleCompleted = (e) => {
        toggleDisplayTodo('completed')
    }
    togglePending = (e) => {
        toggleDisplayTodo('pending')
    }
    render() {
        return (
            <div>
                <List>
                    {this.props.todos.map(function (todo, key) {
                        if (todo.active && this.props.filter === 'all') {
                            return <TodoItem key={key} todo={todo} />
                        } else if (todo.active && todo.completed && this.props.filter === 'completed') {
                            return <TodoItem key={key} todo={todo} />
                        } else if (todo.active && !todo.completed && this.props.filter === 'pending') {
                            return <TodoItem key={key} todo={todo} />
                        } else {
                            return null
                        }
                    }.bind(this))}
                </List>
                <Divider/>
                <CardActions>
                    <FlatButton onClick={this.toggleAll} label={"All - " + this.props.todos.filter(i => i.active).length}/>
                    <FlatButton onClick={this.toggleCompleted} label={"Completed - " + this.props.todos.filter(i => i.completed && i.active).length} />
                    <FlatButton onClick={this.togglePending} label={"Pending - " + this.props.todos.filter(i => !i.completed && i.active).length} />
                </CardActions>
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