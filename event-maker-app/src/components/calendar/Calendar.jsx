import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import getMonthDays from '../../assets-components/Get-Month-Days';

import Day from './calendar-components/Calendar-Day';
import { CalendarStyle } from '../styles/Calendar.styled';
import { WeekSpan } from '../styles/Sidebar.styled';

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar({ isCreateOpen, isShowOpen, isLoginOpen }) {
  const month = useSelector((store) => {
    return store.calendar.bigMonth;
  });

  const date = dayjs();
  const calendar = getMonthDays(month);

  function getToday(day) {
    return dayjs(day).format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'current-day'
      : '';
  }

  return (
    <CalendarStyle
      className={isCreateOpen || isShowOpen || isLoginOpen ? 'modal-open' : ''}
    >
      {week.map((day, index) => (
        <WeekSpan key={index}>{day}</WeekSpan>
      ))}
      {calendar.map((day, index) => (
        <div key={index}>
          <header>
            <span
              style={{ borderRadius: '0.5rem', padding: '0 0.25rem' }}
              className={`${getToday(day)}`}
            >
              {day.format('DD')}
            </span>
          </header>
          <Day day={day} date={date} />
        </div>
      ))}
    </CalendarStyle>
  );
}
