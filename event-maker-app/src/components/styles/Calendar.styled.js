import styled from 'styled-components';

export const CalendarStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 3rem repeat(5, 1fr);
  padding: 1rem 1rem 1rem 0.25rem;

  flex: 1;

  & > span {
    font-size: 1.25rem;
    text-align: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1px solid ${({ theme }) => theme.borderColors};
  }
`;

export const DayStyle = styled.div`
  padding: 0.5rem;
  min-width: 6rem;
  max-width: 15rem;
  width: 100%;
  min-height: 7rem;
  cursor: pointer;
`;
