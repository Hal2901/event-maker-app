import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';

import {
  nextBigMonth,
  prevBigMonth,
  thisMonth,
} from '../../../features/calendar/calendarSlice';
import { setSelectedDay } from '../../../features/event/eventSlice';

import { NavStyle } from '../../styles/Header.styled';
import { Flex } from '../../styles/Flex.styled';
import { TodayButton, NavigateButton } from '../../styles/Button.styled';

export default function NavbarNavigation() {
  const month = useSelector((store) => {
    return store.calendar.bigMonth;
  });
  const dispatch = useDispatch();

  return (
    <NavStyle>
      <TodayButton
        onClick={() => {
          dispatch(thisMonth());
          dispatch(setSelectedDay(dayjs()));
        }}
      >
        Today
      </TodayButton>
      <Flex>
        <NavigateButton
          onClick={() => {
            dispatch(prevBigMonth());
          }}
        >
          <span className="material-symbols-outlined">navigate_before</span>
        </NavigateButton>
        <NavigateButton
          onClick={() => {
            dispatch(nextBigMonth());
          }}
        >
          <span className="material-symbols-outlined">navigate_next</span>
        </NavigateButton>
      </Flex>
      <p>{dayjs(new Date(dayjs().year(), month)).format('MMMM YYYY')}</p>
    </NavStyle>
  );
}
