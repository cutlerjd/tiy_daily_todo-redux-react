import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from '../store'
//import AppBar from 'material-ui/AppBar';
import {Card, CardHeader} from 'material-ui/Card';

const style = {
  width: 500,
  margin: 20,
  root:{
    display: 'flex',
    flexWrap: 'wrap',
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div className="container" style={style.root}>
          <Card style={style}>
          <CardHeader title="Todo App" /> 
            <TodoForm style={style.root}/>
            <TodoList />
          </Card>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
