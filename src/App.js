import React, { Component } from 'react';
import Panel from './Panel';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Obst kaufen' },
        { id: 2, title: 'Programmieren lernen' },
        { id: 3, title: '3. TODO' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
    let todos = this.state.todos;
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }

    todos.unshift({ id: maxId + 1, title: title });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} />
        <br />
        <TodoAdd onAdd={this.addTodo} />
      </div>
    );
  }
}

export default App;
