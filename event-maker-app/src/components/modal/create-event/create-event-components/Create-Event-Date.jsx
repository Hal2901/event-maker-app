import {
  FormInputStyled,
  LabelStyled,
  InputStyled,
} from '../../../styles/Input.styled';

export default function CreateEventDate({ input, setInput }) {
  return (
    <>
      <FormInputStyled>
        <LabelStyled htmlFor="start">Start:</LabelStyled>
        <InputStyled
          value={input.start}
          onChange={(e) =>
            setInput({
              ...input,
              start: e.target.value,
            })
          }
          type="time"
          name="start"
          id="start"
        />
      </FormInputStyled>
      <FormInputStyled>
        <LabelStyled htmlFor="end">End:</LabelStyled>
        <InputStyled
          value={input.end}
          onChange={(e) =>
            setInput({
              ...input,
              end: e.target.value,
            })
          }
          type="time"
          name="end"
          id="end"
        />
      </FormInputStyled>
    </>
  );
}
