import { useDispatch } from 'react-redux';
import { openCreateEvent } from '../../../features/modal/modalSlice';
import { setSelectedEvent } from '../../../features/event/eventSlice';
import { CreateButton } from '../../styles/Button.styled';

export default function SidebarCreateEvent() {
  const dispatch = useDispatch();

  return (
    <>
      <CreateButton
        onClick={() => {
          dispatch(openCreateEvent());
          dispatch(setSelectedEvent(null));
        }}
      >
        <span className="material-symbols-outlined">add</span>Create
      </CreateButton>
    </>
  );
}
