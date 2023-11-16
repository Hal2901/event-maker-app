import styled from 'styled-components';

export const ChatRoomMessagesStyle = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColors};
  padding: 1rem;
`;

export const ChatRoomSendStyle = styled.div`
  background-color: ${({ theme }) => theme.backgroundColors};
  border: 1px solid ${({ theme }) => theme.borderColors};
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
