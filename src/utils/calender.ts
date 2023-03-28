import dayjs, { Dayjs } from 'dayjs';

export const fillEmptyColumns = ({
  columns,
  startDate,
  endDate,
}: {
  columns: Dayjs[];
  startDate: Dayjs;
  endDate: Dayjs;
}): Dayjs[] => {
  const filledColumns = columns.slice(0);

  const startDay = dayjs(startDate).get('day');

  for (let i = 1; i <= startDay; i++) {
    const date = dayjs(startDate).subtract(i, 'day');
    filledColumns.unshift(date);
  }

  const endDay = dayjs(endDate).get('day');
  for (let i = 1; i <= 6 - endDay; i++) {
    const date = dayjs(endDate).add(i, 'day');
    filledColumns.push(date);
  }

  return filledColumns;
};

export const getCalenderColumns = (now: Dayjs): Dayjs[] => {
  const isValid = dayjs(now).isValid();
  if (!isValid) return [];

  const start = dayjs(now).startOf('month');
  const end = dayjs(now).endOf('month');
  const endDate = dayjs(end).get('date');

  const columns = [];

  for (let i = 0; i < endDate; i++) {
    const date = dayjs(start).add(i, 'day');
    columns.push(date);
  }

  const filledColumns = fillEmptyColumns({
    columns,
    startDate: start,
    endDate: end,
  });
  return filledColumns;
};
