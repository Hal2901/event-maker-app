import ChatRoomMessages from './chat-room-components/Chat-Room-Messages';
import ChatRoomSend from './chat-room-components/Chat-Room-Send';
import ChatRoomHeader from './chat-room-components/chat-room-header';
import { ChatRoomStyle } from '../../styles/Modal.styled';

export default function ChatRoom() {
  return (
    <ChatRoomStyle>
      <ChatRoomHeader />
      <ChatRoomMessages />
      <ChatRoomSend />
    </ChatRoomStyle>
  );
}
