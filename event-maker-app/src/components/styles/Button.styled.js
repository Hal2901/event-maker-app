import styled from 'styled-components';

export const NavigateButton = styled.button`
  & > span {
    padding: 0.25rem 0.5rem;
    font-size: 1.5rem;
  }
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1rem;
  width: min-content;
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.textColors};
`;

export const TodayButton = styled.button`
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.textColors};
`;

export const ExitButton = styled.button`
  font-size: 1rem;
  width: min-content;
  height: min-content;
`;

export const SaveButton = styled.button`
  width: min-content;
  margin-left: auto;
  margin-top: 1rem;

  & > span {
    font-size: 2rem;
  }
`;

export const DeleteButton = styled.button`
  width: min-content;

  & > span {
    font-size: 1.25rem;
  }
`;

export const EmojiButton = styled.button`
  position: absolute;
  right: 1%;
  top: 5%;
`;

export const ShowAttendeesButton = styled.button`
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  gap: 0.25rem;
  & > span {
    font-size: 1.25rem;
  }
`;

export const ShowChatButton = styled.button`
  align-self: center;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  gap: 0.25rem;
  & > span {
    font-size: 1.25rem;
  }
`;

export const SendButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  flex-shrink: 1;

  &:hover {
    opacity: 1;
    border: 1px solid ${({ theme }) => theme.textColors};
  }
`;

export const SendEmojiButton = styled.button`
  position: absolute;
  right: 1%;
  top: 10%;
`;
