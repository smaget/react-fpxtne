import React, { Component } from 'react';
import Panel from './Panel';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    return (
      <Panel tiqtle="Todo">
        <h1>Todo-Liste</h1>
        <ul className="App-todo">
          {this.props.todos.map(function(todo) {
            return (
              <li key={todo.id}>
                #{todo.id}: {todo.title}
              </li>
            );
          })}
        </ul>
      </Panel>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
