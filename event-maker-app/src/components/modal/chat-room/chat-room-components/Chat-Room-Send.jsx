import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

import { SendButton, SendEmojiButton } from '../../../styles/Button.styled';
import { ChatRoomSendStyle } from '../../../styles/ChatRoom.styled';
import { SendMessageStyle } from '../../../styles/Input.styled';
import { PickerStyle } from '../../../styles/Input.styled';

export default function ChatRoomSend() {
  const [chooseEmoji, setChooseEmoji] = useState(false);
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function showPicker() {
    setChooseEmoji((c) => !c);
  }

  function addEmoji(e) {
    let emoji = e.native;
    setText((text) => text + emoji);
  }

  return (
    <ChatRoomSendStyle>
      <div style={{ position: 'relative', width: '100%' }}>
        <SendMessageStyle
          name="message"
          id="message"
          placeholder="message..."
          value={text}
          onChange={(e) => handleChange(e)}
        ></SendMessageStyle>
        <SendEmojiButton type="button" onClick={() => showPicker()}>
          <span className="material-symbols-outlined">add_reaction</span>
        </SendEmojiButton>
        {chooseEmoji && (
          <PickerStyle>
            <Picker
              data={data}
              onEmojiSelect={(e) => addEmoji(e)}
              navPosition={'none'}
              previewPosition={'none'}
              maxFrequentRows={0}
              emojiButtonSize={30}
              emojiSize={20}
              perLine={6}
            />
          </PickerStyle>
        )}
      </div>
      <SendButton>Send</SendButton>
    </ChatRoomSendStyle>
  );
}
