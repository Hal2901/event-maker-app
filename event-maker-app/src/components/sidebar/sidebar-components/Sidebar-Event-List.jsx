import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import styled from 'styled-components';

import {
  openCreateEvent,
  openShowEvent,
} from '../../../features/modal/modalSlice';
import {
  setSelectedEvent,
  setSelectedDay,
} from '../../../features/event/eventSlice';
import { setSelectedMonth } from '../../../features/calendar/calendarSlice';

import { EventList } from '../../styles/Sidebar.styled';

const EventListLabel = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > span {
    font-size: 1.25rem;
  }
`;

const List = styled.ul`
  max-height: 25rem;
  overflow: auto;
`;

const Event = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

const Label = styled.p`
  max-width: 13rem;
  overflow: hidden;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: #fff;

  &:hover {
    opacity: 0.85;
  }
`;

const ConfigButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.textColors};

  &:hover {
    opacity: 0.5;
  }

  & > span {
    font-size: 1rem;
  }
`;

export default function SidebarEventList() {
  const { savedEvents } = useSelector((store) => {
    return store.event;
  });
  const { currentUser } = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();

  return (
    <EventList>
      <EventListLabel>
        <span className="material-symbols-outlined">event</span>
        Your Events
      </EventListLabel>
      <List>
        {savedEvents.map((event) => (
          <>
            {currentUser &&
              currentUser.events.some(
                (evt) =>
                  evt.event.id === event.id &&
                  (currentUser.id === event.hostId ? true : event.invite)
              ) && (
                <Event key={event.id}>
                  <Label
                    style={{
                      backgroundColor: event.color,
                    }}
                    onClick={() => {
                      dispatch(setSelectedMonth(event.day));
                      dispatch(setSelectedEvent(event));
                      dispatch(openShowEvent());
                    }}
                  >
                    {event.title === '' ? '"blank"' : event.title}
                  </Label>
                  {currentUser && currentUser.id === event.hostId && (
                    <ConfigButton
                      onClick={() => {
                        dispatch(setSelectedMonth(event.day));
                        dispatch(setSelectedEvent(event));
                        dispatch(setSelectedDay(dayjs(event.day)));
                        dispatch(openCreateEvent());
                      }}
                    >
                      <span className="material-symbols-outlined">
                        handyman
                      </span>
                    </ConfigButton>
                  )}
                </Event>
              )}
          </>
        ))}
      </List>
    </EventList>
  );
}
