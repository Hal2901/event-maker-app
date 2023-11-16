import styled from 'styled-components';

export const FormInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputStyled = styled.input`
  font-size: 1rem;
  line-height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 0.5px solid ${({ theme }) => theme.borderColors};
  padding: 0 0.5rem;
`;

export const TitleInputStyle = styled.textarea`
  font-size: 1rem;
  line-height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 0.5px solid ${({ theme }) => theme.borderColors};
  padding: 0 0.5rem;
  resize: none;
`;

export const LabelStyled = styled.label``;

export const InputWithEmoji = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

export const PickerStyle = styled.span`
  position: absolute;
  font-size: 5rem;
  right: -5rem;
  top: -28.5rem;
  height: 100px;
`;

export const SendMessageStyle = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0.25rem 1.5rem 0.25rem 0.25rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  height: 100%;
`;
