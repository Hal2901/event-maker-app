import { useSelector, useDispatch } from 'react-redux';

import { attendEvent, declineEvent } from '../../../../features/user/userSlice';

import { Flex } from '../../../styles/Flex.styled';
import { useEffect, useState } from 'react';

export default function Attend() {
  const { selectedEvent } = useSelector((store) => {
    return store.event;
  });
  const { currentUser } = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();
  const [isAttend, setIsAttend] = useState(false);

  useEffect(() => {
    const currentEvent = currentUser.events.filter(
      (evt) => evt.event.id === selectedEvent.id
    );
    if (currentEvent.length !== 0) {
      setIsAttend(currentEvent[0].attend);
    } else {
      setIsAttend(false);
    }
  }, [currentUser.events, selectedEvent.id]);

  console.log(currentUser, isAttend);

  return (
    <Flex style={{ ['margin-bottom']: '1rem' }}>
      <p>Attend:</p>
      {isAttend ? (
        <>
          <label htmlFor="yes">Yes</label>
          <input id="yes" name="attend" value="yes" type="radio" checked />
          <label htmlFor="no">No</label>
          <input
            id="no"
            name="attend"
            value="no"
            onChange={() => {
              setIsAttend(false);
              dispatch(declineEvent(selectedEvent));
            }}
            type="radio"
          />
        </>
      ) : (
        <>
          <label htmlFor="yes">Yes</label>
          <input
            id="yes"
            name="attend"
            value="yes"
            onChange={() => {
              setIsAttend(true);
              dispatch(attendEvent({ event: selectedEvent, attend: true }));
            }}
            type="radio"
          />
          <label htmlFor="no">No</label>
          <input id="no" name="attend" value="no" type="radio" checked />
        </>
      )}
    </Flex>
  );
}
