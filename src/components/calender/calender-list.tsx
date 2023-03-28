import { Dayjs } from 'dayjs';
import React from 'react';
import { FlatList } from 'react-native';
import { getCalenderColumns } from '../../utils';
import CalenderDate from './calender-date';

interface P {
  now: Dayjs;
  date: Dayjs;
  onSelect: (date: Dayjs) => void;
}

export const CalendarList = ({ now, date, onSelect }: P) => {
  const columns = getCalenderColumns(date);

  return (
    <FlatList
      renderItem={({ item, index }) => (
        <CalenderDate
          day={index % 7}
          value={item}
          opacity={date.get('month') === item.get('month') ? 1 : 0.4}
          onPress={onSelect}
          selected={now.format('YYYYMMDD') === item.format('YYYYMMDD')}
        />
      )}
      numColumns={7}
      data={columns}
      keyExtractor={(item) => item.format('YYYY-MM-DD')}
    />
  );
};
