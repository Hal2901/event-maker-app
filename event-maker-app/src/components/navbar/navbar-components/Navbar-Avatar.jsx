import { useSelector, useDispatch } from 'react-redux';

import { openLogin, closeLogin } from '../../../features/modal/modalSlice';

import { Avatar } from '../../styles/Header.styled';

export default function NavbarAvatar() {
  const { currentUser } = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <p>{currentUser && currentUser.name}</p>
      <Avatar
        onClick={() => {
          dispatch(openLogin());
        }}
        src="src\assets\default avatar img.jpg"
        alt="avatar image"
      />
    </div>
  );
}
