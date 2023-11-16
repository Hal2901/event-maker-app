import SidebarCalendarDisplay from './Sidebar-Calendar-components/Sidebar-Calendar-Display';
import SidebarCalendarNav from './Sidebar-Calendar-components/Sidebar-Calendar-Navigation';
import { SidebarCalendarStyle } from '../../styles/Sidebar.styled';

export default function SidebarCalendar() {
  return (
    <SidebarCalendarStyle>
      <SidebarCalendarNav />
      <SidebarCalendarDisplay />
    </SidebarCalendarStyle>
  );
}
