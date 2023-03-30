import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Storage } from '../../utils/storage';

import { Todo } from './todo.type';

interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: ({ id, text }: { id: number; text: string }) => void;
}

const TodoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const storage = new Storage('@todo');

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { id: Date.now(), text }];
    setTodos(newTodos);
    storage.setValue(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    storage.setValue(newTodos);
  };

  const modifyTodo = ({ id, text }: { id: number; text: string }) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodos);
    storage.setValue(newTodos);
  };

  useEffect(() => {
    syncTodo();

    async function syncTodo() {
      const todo = await storage.getValue();
      if (Array.isArray(todo)) {
        setTodos(todo);
      }
    }
  }, []);

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
