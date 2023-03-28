import { Dayjs } from 'dayjs';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface P {
  date: Dayjs;
  onNext: VoidFunction;
  onPrev: VoidFunction;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export const CalenderHeader = ({ date, onNext, onPrev }: P) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPrev}>
        <Text>{`<`}</Text>
      </Pressable>
      <Text>{date.format('YYYY.MM')}</Text>
      <Pressable onPress={onNext}>
        <Text>{`>`}</Text>
      </Pressable>
    </View>
  );
};
