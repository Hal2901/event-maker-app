import { LabelStyled, InputStyled } from '../../../styles/Input.styled';
import { Flex } from '../../../styles/Flex.styled';

export default function CreateEventColor({ input, setInput }) {
  return (
    <Flex>
      <LabelStyled htmlFor="color">Color:</LabelStyled>
      <InputStyled
        type="color"
        name="color"
        id="color"
        style={{ width: '3rem' }}
        value={input.color}
        onChange={(e) =>
          setInput({
            ...input,
            color: e.target.value,
          })
        }
      />
    </Flex>
  );
}
