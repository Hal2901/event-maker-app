import dayjs from 'dayjs';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  nextSmallMonth,
  prevSmallMonth,
  chooseDate,
} from '../../../../features/calendar/calendarSlice';
import { setSelectedDay } from '../../../../features/event/eventSlice';

import { NavStyle } from '../../../styles/Header.styled';
import { NavigateButton } from '../../../styles/Button.styled';
import { Flex } from '../../../styles/Flex.styled';

const MonthAndYear = styled.p`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export default function SidebarCalendarNav() {
  const [isDateInput, setIsDateInput] = useState(false);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const dispatch = useDispatch();
  const month = useSelector((store) => {
    return store.calendar.smallMonth;
  });

  return (
    <NavStyle>
      {isDateInput ? (
        <Flex style={{ gap: '0.5rem' }}>
          <input
            style={{ width: '6.5rem' }}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <button
            onClick={() => {
              setIsDateInput(false);
              dispatch(chooseDate(date));
              dispatch(setSelectedDay(dayjs(date)));
            }}
          >
            save
          </button>
        </Flex>
      ) : (
        <MonthAndYear onClick={() => setIsDateInput(true)}>
          {dayjs(new Date(dayjs().year(), month)).format('MMMM YYYY')}
        </MonthAndYear>
      )}

      <div style={{ marginLeft: 'auto' }}>
        <NavigateButton onClick={() => dispatch(prevSmallMonth())}>
          <span className="material-symbols-outlined">navigate_before</span>
        </NavigateButton>
        <NavigateButton onClick={() => dispatch(nextSmallMonth())}>
          <span className="material-symbols-outlined">navigate_next</span>
        </NavigateButton>
      </div>
    </NavStyle>
  );
}
