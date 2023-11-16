import SidebarCalendar from './sidebar-components/Sidebar-Calendar';
import SidebarCreateEvent from './sidebar-components/Sidebar-Create-Event';
import SidebarEventList from './sidebar-components/Sidebar-Event-List';

import { SidebarStyle } from '../styles/Sidebar.styled';

export default function Sidebar({ isCreateOpen, isShowOpen, isLoginOpen }) {
  return (
    <SidebarStyle
      className={isCreateOpen || isShowOpen || isLoginOpen ? 'modal-open' : ''}
    >
      <SidebarCreateEvent />
      <SidebarCalendar />
      <SidebarEventList />
    </SidebarStyle>
  );
}
