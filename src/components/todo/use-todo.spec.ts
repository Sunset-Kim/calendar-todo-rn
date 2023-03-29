import { act, renderHook } from '@testing-library/react-native';
import { Todo } from './todo.type';
import { useTodo } from './use-todo';

describe('useTodo', () => {
  const TODOS: Todo[] = [{ id: 1, text: '할일1' }];
  it('값을 제공하면, 초기렌더된다', () => {
    const { result } = renderHook((props: Todo[]) => useTodo(props), {
      initialProps: TODOS,
    });

    expect(result.current.todos).toEqual(TODOS);
  });

  it(', 초기렌더된다', () => {
    const { result } = renderHook((props: Todo[]) => useTodo(props), {
      initialProps: TODOS,
    });

    act(() => {
      result.current.addTodo('뭐가');
    });

    expect(result.current.todos[1]).toEqual({ id: 2, text: '뭐가' });
  });
});
