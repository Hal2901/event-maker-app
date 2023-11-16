import NavbarNavigation from './navbar-components/Navbar-Navigation';
import NavbarAvatar from './navbar-components/Navbar-Avatar';

import { HeaderStyle, Logo } from '../styles/Header.styled';
import { Flex } from '../styles/Flex.styled';

export default function Navbar({ isCreateOpen, isShowOpen, isLoginOpen }) {
  return (
    <HeaderStyle
      className={isCreateOpen || isShowOpen || isLoginOpen ? 'modal-open' : ''}
    >
      <Flex>
        <Flex>
          <Logo src="src\assets\logo-aladintech 1.png" alt="aladintech-logo" />
          <p>AlaEve</p>
        </Flex>
        <NavbarNavigation />
      </Flex>
      <NavbarAvatar />
    </HeaderStyle>
  );
}
