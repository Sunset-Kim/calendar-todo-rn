import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { View } from 'react-native';
import { CalenderDays } from './calender-days';
import { CalenderHeader } from './calender-header';
import { CalendarList } from './calender-list';

export const Calendar = () => {
  const [now, setNow] = useState<Dayjs>(dayjs());
  const [showDate, setShowDate] = useState<Dayjs>(dayjs().set('date', 1));
  const onNext = () => setShowDate(showDate.add(1, 'month'));
  const onPrev = () => setShowDate(showDate.subtract(1, 'month'));
  const onSelect = (date: Dayjs) => {
    setNow(date);
    const isSameMonth = dayjs(date).isSame(now, 'month');
    if (isSameMonth) return;
    setShowDate(date.clone().set('date', 1));
  };

  return (
    <View>
      <CalenderHeader
        date={showDate}
        onNext={onNext}
        onPrev={onPrev}
      />
      <CalenderDays />
      <CalendarList
        now={now}
        date={showDate}
        onSelect={onSelect}
      />
    </View>
  );
};
