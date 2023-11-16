import styled from 'styled-components';

export const CreateEventStyle = styled.form`
  width: 25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors};
  color: ${({ theme }) => theme.textcolors};
  border: 1px solid ${({ theme }) => theme.borderColors};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 99;
`;

export const ShowEventStyle = styled.div`
  width: 25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors};
  color: ${({ theme }) => theme.textcolors};
  border: 1px solid ${({ theme }) => theme.borderColors};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 99;
`;

export const AttendeesStyle = styled.div`
  width: 25rem;
  height: 10rem;
  overflow: auto;
  background-color: ${({ theme }) => theme.backgroundColors};
  color: ${({ theme }) => theme.textcolors};
  border: 1px solid ${({ theme }) => theme.borderColors};
  border-radius: 1rem;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 99;
`;

export const ChatRoomStyle = styled.div`
  min-width: 25rem;
  width: 50vw;
  height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors};
  color: ${({ theme }) => theme.textcolors};
  border: 1px solid ${({ theme }) => theme.borderColors};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 99;
`;

export const LoginStyle = styled.div`
  width: 25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors};
  color: ${({ theme }) => theme.textcolors};
  border: 1px solid ${({ theme }) => theme.borderColors};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 99;
`;
