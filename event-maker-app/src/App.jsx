import { useSelector } from 'react-redux';

import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Calendar from './components/calendar/Calendar';
import CreateEvent from './components/modal/create-event/Create-Event';
import ShowEvent from './components/modal/show-event/Show-Event';
import ChatRoom from './components/modal/chat-room/Chat-Room';
import Login from './components/modal/login/Login';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/GlobalStyles.styled';
import { Flex } from './components/styles/Flex.styled';
import DeleteConfirm from './components/modal/create-event/Delete-Confirm';

const theme = {
  backgroundColors: '#FFFFFB',
  textColors: '#3e5524',
  borderColors: '#2836185a',
};

function App() {
  const { isCreateOpen, isShowOpen, isChatOpen, isLoginOpen, isConfirmOpen } =
    useSelector((store) => store.modal);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar
          isCreateOpen={isCreateOpen}
          isShowOpen={isShowOpen}
          isLoginOpen={isLoginOpen}
        />
        <Flex>
          <Sidebar
            isCreateOpen={isCreateOpen}
            isShowOpen={isShowOpen}
            isLoginOpen={isLoginOpen}
          />
          <Calendar
            isCreateOpen={isCreateOpen}
            isShowOpen={isShowOpen}
            isLoginOpen={isLoginOpen}
          />
        </Flex>
        {isCreateOpen && <CreateEvent />}
        {isShowOpen && <ShowEvent />}
        {isChatOpen && <ChatRoom />}
        {isLoginOpen && <Login />}
        {isConfirmOpen && <DeleteConfirm />}
      </>
    </ThemeProvider>
  );
}

export default App;
