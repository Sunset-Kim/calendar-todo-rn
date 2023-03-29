import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Todo } from './todo.type';

interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: ({ id, text }: { id: number; text: string }) => void;
}

const TodoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const modifyTodo = ({ id, text }: { id: number; text: string }) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, modifyTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const ctx = useContext(TodoContext);

  if (!ctx) {
    throw new Error('useTodo must be used within the TodoProvider');
  }

  return ctx;
};
