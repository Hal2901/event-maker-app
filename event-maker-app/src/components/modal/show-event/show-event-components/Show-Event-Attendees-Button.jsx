import { ShowAttendeesButton } from '../../../styles/Button.styled';

export default function ShowAttendees({ isOpen, setIsOpen }) {
  return (
    <ShowAttendeesButton
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      Attendees
      <span className="material-symbols-outlined">double_arrow</span>
    </ShowAttendeesButton>
  );
}
