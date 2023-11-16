import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useEffect, useState } from 'react';

import {
  FormInputStyled,
  InputWithEmoji,
  LabelStyled,
  PickerStyle,
  TitleInputStyle,
} from '../../../styles/Input.styled';
import { EmojiButton } from '../../../styles/Button.styled';

export default function CreateEventTitle({ input, setInput }) {
  const [chooseEmoji, setChooseEmoji] = useState(false);

  function showPicker() {
    setChooseEmoji((c) => !c);
  }

  function addEmoji(e) {
    let emoji = e.native;
    setInput({
      ...input,
      title: input.title + emoji,
    });
  }

  return (
    <FormInputStyled>
      <LabelStyled htmlFor="title">Title:</LabelStyled>
      <InputWithEmoji>
        <TitleInputStyle
          name="title"
          id="title"
          placeholder="Add event"
          value={input.title}
          onChange={(e) => {
            setInput({
              ...input,
              title: e.target.value,
            });
          }}
          style={{ padding: '0 1.5rem 0 0.25rem' }}
        ></TitleInputStyle>
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
