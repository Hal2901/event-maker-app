import { useSelector, useDispatch } from 'react-redux';

import { deleteEvent } from '../../../features/event/eventSlice';
import {
  closeCreateEvent,
  closeConfirm,
} from '../../../features/modal/modalSlice';
import { removeUserEvent } from '../../../features/user/userSlice';

import { LoginStyle } from '../../styles/Modal.styled';

export default function DeleteConfirm() {
  const { selectedEvent } = useSelector((store) => {
    return store.event;
  });
  const dispatch = useDispatch();

  return (
    <LoginStyle>
      <button
        onClick={() => {
          dispatch(removeUserEvent(selectedEvent));
          dispatch(deleteEvent(selectedEvent));
          dispatch(closeConfirm());
          dispatch(closeCreateEvent());
        }}
      >
        Yes
      </button>
      <button onClick={() => dispatch(closeConfirm())}>No</button>
    </LoginStyle>
  );
}
