import React, { Component } from 'react';
import '../css/App.css';
import TodoForm from './TodoForm'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Base React app</h1>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
