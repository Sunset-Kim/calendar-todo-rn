import dayjs from 'dayjs';

import weekday from 'dayjs/plugin/weekday';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Calendar } from './src/components/calender';
import { TodoInput, TodoProvider } from './src/components/todo';
import { TodoList } from './src/components/todo/todo-list';
import { DefaultLayout } from './src/layouts/default.layout';

dayjs.extend(weekday);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <DefaultLayout>
        <View>
          <View style={styles.test}>
            <Calendar />
          </View>
          <View style={styles.todoContainer}>
            <TodoProvider>
              <View style={styles.todoListContainer}>
                <TodoList />
              </View>
              <View>
                <TodoInput />
              </View>
            </TodoProvider>
          </View>
        </View>
      </DefaultLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    flex: 1,
  },
  todoListContainer: {
    flex: 1,
  },
  test: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
