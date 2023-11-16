import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.backgroundColors};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-left: 2rem;

  & > p {
    flex-shrink: 0;
    font-weight: 700;
  }
`;

export const Logo = styled.img`
  width: 2.5rem;
`;

export const Avatar = styled.img`
  width: 3rem;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.textColors};
`;

export const ChatRoomHeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.textColors};
  color: ${({ theme }) => theme.backgroundColors};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  & > button {
    background-color: ${({ theme }) => theme.textColors};
    color: ${({ theme }) => theme.backgroundColors};
  }
`;
