import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { closeLogin } from '../../../features/modal/modalSlice';
import { createUser, setUser } from '../../../features/user/userSlice';

import { LoginStyle } from '../../styles/Modal.styled';
import { ExitButton } from '../../styles/Button.styled';

export default function Login() {
  const { users, guestUser, currentUser } = useSelector((store) => {
    return store.user;
  });

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
  });

  function onSubmit(e) {
    e.preventDefault();

    const { name } = input;

    const userInfo = {
      name,
      id: Date.now(),
      events: [],
      messages: [],
    };

    dispatch(createUser(userInfo));

    // dispatch(closeLogin());
  }

  return (
    <LoginStyle>
      {currentUser && (
        <ExitButton
          onClick={() => {
            dispatch(closeLogin());
          }}
          type="button"
          style={{ marginLeft: 'auto' }}
        >
          X
        </ExitButton>
      )}
      <form action="" onSubmit={(e) => onSubmit(e)}>
        <div>
          create account <button>create</button>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={input.name}
            onChange={(e) => {
              setInput({
                ...input,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div>login</div>
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              dispatch(setUser(user));
              dispatch(closeLogin());
            }}
            style={{
              cursor: 'pointer',
            }}
          >
            {user.name}
          </div>
        ))}
        {/* <label htmlFor="">Name:</label>
        <input name='name' type="text"  /> */}
        <div
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            dispatch(setUser(guestUser));
            dispatch(closeLogin());
          }}
        >
          login as guest
        </div>
      </form>
    </LoginStyle>
  );
}
