import { useDispatch } from 'react-redux';
import { openChatEvent } from '../../../../features/modal/modalSlice';
import { ShowChatButton } from '../../../styles/Button.styled';

export default function ShowChat() {
  const dispatch = useDispatch();

  return (
    <ShowChatButton
      onClick={() => {
        dispatch(openChatEvent());
      }}
    >
      <span className="material-symbols-outlined">chat_bubble</span>Chat
    </ShowChatButton>
  );
}
