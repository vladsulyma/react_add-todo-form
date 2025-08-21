import React from 'react';
import './App.scss';
import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { NewTodo } from './components/NewTodo/NewTodo';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(todosFromServer);

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo]);
  };

  return (
    <>
      <h1>Add todo form</h1>
      <div className="App">
        <NewTodo onAdd={addTodo} users={usersFromServer} />
        <TodoList todos={todos} users={usersFromServer} />
      </div>
    </>
  );
};
