import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { closeChatEvent } from '../../../../features/modal/modalSlice';

import { ExitButton } from '../../../styles/Button.styled';
import { ChatRoomHeaderStyle } from '../../../styles/Header.styled';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function ChatRoomHeader() {
  const { selectedEvent } = useSelector((store) => {
    return store.event;
  });
  const dispatch = useDispatch();

  return (
    <ChatRoomHeaderStyle
      style={{
        ['background-color']: `${selectedEvent.color}`,
      }}
    >
      <Header>
        <p style={{ fontSize: '0.75rem' }}>Room ID: {selectedEvent.id}</p>
        <p>{selectedEvent.title}</p>
      </Header>
      <ExitButton
        onClick={() => {
          dispatch(closeChatEvent());
        }}
        type="button"
        style={{
          ['background']: `${selectedEvent.color}`,
        }}
      >
        X
      </ExitButton>
    </ChatRoomHeaderStyle>
  );
}
