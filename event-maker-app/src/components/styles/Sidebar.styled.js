import styled from 'styled-components';

export const SidebarStyle = styled.aside`
  align-self: self-start;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1rem 1rem;
  gap: 2rem;
`;

export const SidebarCalendarStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 15rem;
  & > nav {
    margin: 0;
  }
`;

export const SmallCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const WeekSpan = styled.span`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
`;
