import { Dayjs } from 'dayjs';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  sunday: {
    color: 'red',
  },
  saturday: {
    color: 'dodgerblue',
  },
  normal: {
    color: '#222222',
  },
  selected: {
    backgroundColor: 'gold',
  },
  pressed: {
    opacity: 0.3,
    backgroundColor: '#F7DB6A',
  },
  dateContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

const DAY_STYLES_MAP = {
  0: styles.sunday,
  6: styles.saturday,
} as const;

const getDayColor = (day: number) => {
  const style = DAY_STYLES_MAP[day as keyof typeof DAY_STYLES_MAP];
  return style ?? styles.normal;
};

interface P {
  value: Dayjs;
  day: number;
  opacity?: number;
  onPress?: (date: Dayjs) => void;
  selected?: boolean;
}

export default function CalenderDate({
  value,
  day,
  opacity = 1,
  onPress,
  selected,
}: P) {
  const date = value.get('date');
  return (
    <Pressable
      style={({ pressed }) => [
        styles.dateContainer,
        pressed && styles.pressed,
        selected && styles.selected,
      ]}
      onPress={() => onPress && onPress(value)}
    >
      <Text style={[getDayColor(day), { opacity }]}>{date}</Text>
    </Pressable>
  );
}
