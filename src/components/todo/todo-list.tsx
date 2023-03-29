import { FlatList, ViewProps } from 'react-native';
import { useTodo } from './todo-context';
import { TodoItem } from './todo-item';

export const TodoList: React.FC<ViewProps> = (props) => {
  const { todos, deleteTodo } = useTodo();

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          text={item.text}
          onDelete={() => deleteTodo(item.id)}
        />
      )}
      {...props}
    />
  );
};
