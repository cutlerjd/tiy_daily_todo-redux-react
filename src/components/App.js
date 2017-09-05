import React, { Component } from 'react';
import '../css/App.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {Provider} from 'react-redux'
import store from '../store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <h1>Base React app</h1>
        <TodoForm/>
        <TodoList/>
      </div>
      </Provider>
    );
  }
}

export default App;
