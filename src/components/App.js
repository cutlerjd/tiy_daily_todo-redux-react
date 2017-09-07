import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from '../store'
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div>
            <AppBar title="Todo App" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <TodoForm />
            <TodoList />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
