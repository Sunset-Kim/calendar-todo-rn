import { useState } from 'react';
import { Todo } from './todo.type';

let id = 1;

export const useTodo = (initTodos: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initTodos ?? []);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: ++id, text }]);
  };

  return {
    todos,
    addTodo,
  };
};
