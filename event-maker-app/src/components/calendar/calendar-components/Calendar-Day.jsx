import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  openCreateEvent,
  openShowEvent,
} from '../../../features/modal/modalSlice';
import {
  setSelectedDay,
  setSelectedEvent,
} from '../../../features/event/eventSlice';

import { DayStyle } from '../../styles/Calendar.styled';
import { Event } from '../../styles/Event.styled';

export default function Day({ day }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { savedEvents, selectedEvent } = useSelector((store) => store.event);
  const dispatch = useDispatch();

  useEffect(() => {
    const events = savedEvents.filter(
      (event) =>
        dayjs(event.day).format('DD-MM-YY') === dayjs(day).format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  return (
    <DayStyle
      onClick={() => {
        dispatch(setSelectedDay(day));
        dispatch(setSelectedEvent(null));
        dispatch(openCreateEvent());
      }}
    >
      <ul>
        {dayEvents.map((event) => (
          <Event
            key={event.id}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setSelectedEvent(event));
              dispatch(openShowEvent());
              console.log(selectedEvent);
            }}
            style={{ backgroundColor: `${event.color}99` }}
          >
            {event.title}
          </Event>
        ))}
      </ul>
    </DayStyle>
  );
}
