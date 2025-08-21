import React from 'react';
import './App.scss';
import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { NewTodo } from './components/NewTodo/NewTodo';

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>(todosFromServer);

  const addTodo = (newTodo: Todo) => {
    setTodoList(currentTodos => {
      const maxId = currentTodos.reduce(
        (max, todo) => (todo.id > max ? todo.id : max),
        0,
      );
      const todoWithId = { ...newTodo, id: maxId + 1 };

      return [...currentTodos, todoWithId];
    });
  };

  return (
    <>
      <h1>Add todo form</h1>
      <div className="App">
        <NewTodo onAdd={addTodo} users={usersFromServer} />
        <TodoList todos={todoList} users={usersFromServer} />
      </div>
    </>
  );
};
