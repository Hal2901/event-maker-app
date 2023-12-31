import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > div,
  & > ul {
    flex: 1;
  }
`;
