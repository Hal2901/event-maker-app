import { Flex } from '../../../styles/Flex.styled';
import { InputStyled, LabelStyled } from '../../../styles/Input.styled';

export default function CreatEventAttend({ input, setInput }) {
  return (
    <Flex>
      <LabelStyled htmlFor="invite">Invite?</LabelStyled>
      {input.invite ? (
        <InputStyled
          type="checkbox"
          id="invite"
          name="invite"
          onChange={(e) =>
            setInput({
              ...input,
              invite: e.target.checked,
            })
          }
          checked
        />
      ) : (
        <InputStyled
          type="checkbox"
          id="invite"
          name="invite"
          onChange={(e) =>
            setInput({
              ...input,
              invite: e.target.checked,
            })
          }
        />
      )}
    </Flex>
  );
}
