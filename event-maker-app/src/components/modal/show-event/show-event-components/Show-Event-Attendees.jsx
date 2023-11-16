import { useSelector } from 'react-redux';

import { AttendeesStyle } from '../../../styles/Modal.styled';

export default function Attendees() {
  const { users } = useSelector((store) => {
    return store.user;
  });
  const { selectedEvent } = useSelector((store) => {
    return store.event;
  });

  return (
    <AttendeesStyle>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.events.some(
              (evt) => evt.event.id === selectedEvent.id && evt.attend
            ) && user.name}
          </li>
        ))}
      </ul>
    </AttendeesStyle>
  );
}
