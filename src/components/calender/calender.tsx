import { View } from 'react-native';
import { CalenderDays } from './calender-days';
import { CalenderHeader } from './calender-header';
import { CalendarList } from './calender-list';
import { useCalendar } from './use-calendar';

export const Calendar = () => {
  const { now, showDate, onNext, onPrev, onSelect } = useCalendar();

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
