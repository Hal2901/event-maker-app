import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

import {
  LabelStyled,
  FormInputStyled,
  InputWithEmoji,
  PickerStyle,
} from '../../../styles/Input.styled';
import { EmojiButton } from '../../../styles/Button.styled';

export default function CreateEventNote({ input, setInput }) {
  const [chooseEmoji, setChooseEmoji] = useState(false);

  function showPicker() {
    setChooseEmoji((c) => !c);
  }

  function addEmoji(e) {
    let emoji = e.native;
    setInput({
      ...input,
      note: input.note + emoji,
    });
  }

  return (
    <FormInputStyled>
      <LabelStyled htmlFor="note">Note:</LabelStyled>
      <InputWithEmoji>
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="5"
          style={{ resize: 'none', padding: '0.25rem', width: '100%' }}
          value={input.note}
          onChange={(e) => {
            setInput({
              ...input,
              note: e.target.value,
            });
          }}
        ></textarea>
        <EmojiButton type="button" onClick={() => showPicker()}>
          <span className="material-symbols-outlined">add_reaction</span>
        </EmojiButton>
        {chooseEmoji && (
          <PickerStyle style={{ left: '100%', top: '0' }}>
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
      </InputWithEmoji>
    </FormInputStyled>
  );
}
