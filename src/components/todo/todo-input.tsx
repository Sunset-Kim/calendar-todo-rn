import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useInput } from '../../hooks/useInput';
import { useTodo } from './todo-context';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#F3DEBA',
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    width: 200,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: 'right',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export const TodoInput = () => {
  const { value, onChange, reset } = useInput();
  const { addTodo } = useTodo();

  const handleAdd = () => {
    const filteredValue = value.trim();
    if (filteredValue === '') return;
    addTodo(filteredValue);
    reset();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        onSubmitEditing={handleAdd}
      />
      <Pressable
        style={styles.button}
        onPress={handleAdd}
      >
        <Ionicons name='add' />
      </Pressable>
    </View>
  );
};
