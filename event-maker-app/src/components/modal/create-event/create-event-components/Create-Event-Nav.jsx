import { useSelector, useDispatch } from 'react-redux';

import { closeCreateEvent } from '../../../../features/modal/modalSlice';
import { openConfirm } from '../../../../features/modal/modalSlice';

import { DeleteButton, ExitButton } from '../../../styles/Button.styled';

export default function CreateEventNav() {
  const { selectedEvent } = useSelector((store) => {
    return store.event;
  });
  const dispatch = useDispatch();

  return (
    <>
      {selectedEvent && (
        <DeleteButton
          onClick={() => {
            dispatch(openConfirm());
          }}
          type="button"
        >
          <span className="material-symbols-outlined">delete</span>
        </DeleteButton>
      )}
      <ExitButton
        onClick={() => {
          dispatch(closeCreateEvent());
        }}
        type="button"
      >
        X
      </ExitButton>
    </>
  );
}
