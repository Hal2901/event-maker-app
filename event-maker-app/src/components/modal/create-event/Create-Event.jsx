import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CreateEventNav from './create-event-components/Create-Event-Nav';
import CreateEventTitle from './create-event-components/Create-Event-Title';
import CreateEventDate from './create-event-components/Create-Event-Date';
import CreateEventColor from './create-event-components/Create-Event-Color';
import CreateEventNote from './create-event-components/Create-Event-Note';
import CreateEventSave from './create-event-components/Create-Event-Save';

import { createEvent, updateEvent } from '../../../features/event/eventSlice';
import { closeCreateEvent } from '../../../features/modal/modalSlice';
import { addUserEvent } from '../../../features/user/userSlice';

import { CreateEventStyle } from '../../styles/Modal.styled';
import { Flex } from '../../styles/Flex.styled';
import CreatEventAttend from './create-event-components/Create-Event-Attend';

const ModalNav = styled.div`
  display: flex;
  align-items: center;
  width: min-content;
  margin-left: auto;
  gap: 1rem;
`;

export default function CreateEvent() {
  const { daySelected, selectedEvent } = useSelector((store) => {
    return store.event;
  });
  const { currentUser } = useSelector((store) => {
    return store.user;
  });
  const { isConfirmOpen } = useSelector((store) => {
    return store.modal;
  });
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: '',
    start: '12:00',
    end: '12:00',
    color: '#000000',
    invite: false,
    note: '',
  });

  useEffect(() => {
    if (selectedEvent) {
      const { title, start, end, color, invite, note } = selectedEvent;
      setInput({
        title,
        start,
        end,
        color,
        invite,
        note,
      });
    }
  }, [selectedEvent]);

  function handleSubmit(e) {
    const { title, start, end, color, invite, note } = input;
    e.preventDefault();

    const calendarEvent = {
      title,
      start,
      end,
      color,
      invite,
      note,
      day: daySelected,
      id: selectedEvent ? selectedEvent.id : Date.now(),
      hostId: currentUser.id,
    };

    if (selectedEvent) {
      dispatch(updateEvent(calendarEvent));
    } else {
      dispatch(createEvent(calendarEvent));
      dispatch(addUserEvent({ event: calendarEvent, attend: false }));
    }

    dispatch(closeCreateEvent());
  }

  return (
    <CreateEventStyle
      className={isConfirmOpen ? 'modal-open' : ''}
      onSubmit={(e) => handleSubmit(e)}
    >
      <ModalNav>
        <CreateEventNav />
      </ModalNav>
      <CreateEventTitle input={input} setInput={setInput} />
      <Flex>
        <CreateEventDate input={input} setInput={setInput} />
      </Flex>
      <Flex>
        <CreateEventColor input={input} setInput={setInput} />
        <CreatEventAttend input={input} setInput={setInput} />
      </Flex>
      <CreateEventNote input={input} setInput={setInput} />
      <CreateEventSave />
    </CreateEventStyle>
  );
}
