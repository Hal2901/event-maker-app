import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';

import getMonthDays from '../../../../assets-components/Get-Month-Days';
import { setSelectedDay } from '../../../../features/event/eventSlice';
import { setSelectedMonth } from '../../../../features/calendar/calendarSlice';

import { SmallCalendar, WeekSpan } from '../../../styles/Sidebar.styled';

const week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function SidebarCalendarDisplay() {
  const month = useSelector((store) => {
    return store.calendar.smallMonth;
  });
  const dispatch = useDispatch();
  const daySelected = useSelector((store) => store.event.daySelected);

  const calendar = getMonthDays(month);

  function getToday(day) {
    const currentDay = dayjs().format('DD-MM-YY');
    const dayInMonth = dayjs(day).format('DD-MM-YY');
    const selectedDay = daySelected && daySelected.format('DD-MM-YY');
    if (currentDay === dayInMonth) {
      return 'current-day';
    } else if (dayInMonth === selectedDay) {
      return 'selected-day';
    }
  }

  return (
    <>
      <SmallCalendar>
        {week.map((day, index) => (
          <WeekSpan key={index}>{day}</WeekSpan>
        ))}
        {calendar.map((day, index) => (
          <button
            key={index}
            className={`${getToday(day)}`}
            onClick={() => {
              dispatch(setSelectedDay(day));
              dispatch(setSelectedMonth(day));
            }}
          >
            <span>{day.format('DD')}</span>
          </button>
        ))}
      </SmallCalendar>
    </>
  );
}
