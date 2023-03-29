import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

export const useCalendar = (initDate?: string) => {
  const isValid = dayjs(initDate).isValid();

  if (!isValid) {
    console.warn('initDate is not valid dateTime!, set Date now');
  }

  const [now, setNow] = useState<Dayjs>(isValid ? dayjs(initDate) : dayjs());
  const [showDate, setShowDate] = useState<Dayjs>(dayjs().set('date', 1));
  const onNext = () => setShowDate(showDate.add(1, 'month'));
  const onPrev = () => setShowDate(showDate.subtract(1, 'month'));
  const onSelect = (date: Dayjs) => {
    setNow(date);
    const isSameMonth = dayjs(date).isSame(now, 'month');
    if (isSameMonth) return;
    setShowDate(date.clone().set('date', 1));
  };

  return {
    now,
    showDate,
    onNext,
    onPrev,
    onSelect,
  };
};
