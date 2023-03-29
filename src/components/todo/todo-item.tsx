import { Text, View } from 'react-native';
import IconButton from '../ui/icon-button';

interface TodoItemProps {
  text: string;
  onDelete?: () => void;
  onComplete?: () => void;
}

export const TodoItem = ({ text, onComplete, onDelete }: TodoItemProps) => {
  return (
    <View>
      <Text>{text}</Text>
      {onComplete && <IconButton name='checkmark' />}
      {onDelete && (
        <IconButton
          name='trash'
          onPress={onDelete}
        />
      )}
    </View>
  );
};
