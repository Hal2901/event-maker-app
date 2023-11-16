import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeShowEvent } from '../../../features/modal/modalSlice';

import ShowAttendees from './show-event-components/Show-Event-Attendees-Button';
import ShowChat from './show-event-components/Show-Event-Show-Chat-Button';
import Attend from './show-event-components/Show-Event-Attend';
import Attendees from './show-event-components/Show-Event-Attendees';

import { ShowEventStyle } from '../../styles/Modal.styled';
import { ExitButton } from '../../styles/Button.styled';
import { Flex } from '../../styles/Flex.styled';

const EventDetail = styled.div`
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.textColors};
  width: max-content;
  font-weight: 700;
`;

const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;

  & > span {
    font-size: 0.85rem;
  }
`;

const Note = styled.p`
  width: 100%;
  word-wrap: break-word;
`;

export default function ShowEvent() {
  const { selectedEvent } = useSelector((store) => {
    return store.event;
  });
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <ShowEventStyle>
      <ExitButton
        onClick={() => {
          dispatch(closeShowEvent());
        }}
        type="button"
        style={{ marginLeft: 'auto' }}
      >
        X
      </ExitButton>

      <EventDetail>
        <Title
          style={{
            color: `${selectedEvent.color}`,
          }}
        >
          {selectedEvent.title}
        </Title>
        <div>
          <Time style={{ marginBottom: '0.25rem' }}>
            <span className="material-symbols-outlined">today</span>
            <span>{dayjs(selectedEvent.day).format('ddd, D MMM YYYY')} </span>
          </Time>
          <Time>
            <span
              style={{ ['font-size']: '1.25rem' }}
              className="material-symbols-outlined"
            >
              schedule
            </span>
            <span style={{ ['font-size']: '1.25rem' }}>
              {selectedEvent.start} - {selectedEvent.end}
            </span>
          </Time>
        </div>
        <Note>{selectedEvent.note}</Note>
      </EventDetail>
      {selectedEvent.invite && <Attend />}
      <Flex>
        <ShowChat />
        {selectedEvent.invite && (
          <ShowAttendees isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </Flex>
      {isOpen && <Attendees />}
    </ShowEventStyle>
  );
}
