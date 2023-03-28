import dayjs from 'dayjs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DAYS = [0, 1, 2, 3, 4, 5, 6] as const;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  sunday: {
    color: 'red',
  },
  saturday: {
    color: 'dodgerblue',
  },
  normal: {
    color: '#222222',
  },
  day: {
    fontSize: 12,
  },
  date: {},
  pressed: {
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

export const CalenderDays = () => {
  return (
    <View style={styles.container}>
      {DAYS.map((day) => (
        <View
          key={dayjs().weekday(day).format('ddd')}
          style={[styles.dateContainer]}
        >
          <Text style={[getDayColor(day), { fontSize: 12 }]}>
            {dayjs().weekday(day).format('ddd')}
          </Text>
        </View>
      ))}
    </View>
  );
};
