import { createSlice } from '@reduxjs/toolkit';

// localStorage.removeItem('savedUsers');
const storageUsers = localStorage.getItem('savedUsers');
const storageChatLog = localStorage.getItem('savedChatLog');
const parsedUsers = storageUsers ? JSON.parse(storageUsers) : [];
const parsedChatLog = storageChatLog ? JSON.parse(storageChatLog) : [];

const initialState = {
  users: parsedUsers,
  currentUser: null,
  guestUser: {
    id: Date.now(),
    name: 'guest',
    events: [],
    messages: [{ content: '', time: '' }],
  },
  chatLog: parsedChatLog,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.users = [...state.users, payload];
      localStorage.setItem('savedUsers', JSON.stringify(state.users));
    },
    setUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    addUserEvent: (state, { payload }) => {
      state.currentUser = {
        ...state.currentUser,
        events: [...state.currentUser.events, payload],
      };
      state.users = state.users.map((user) =>
        user.id === state.currentUser.id ? state.currentUser : user
      );
      localStorage.setItem('savedUsers', JSON.stringify(state.users));
    },
    removeUserEvent: (state, { payload }) => {
      state.currentUser = {
        ...state.currentUser,
        events: state.currentUser.events.filter(
          (evt) => evt.event.id !== payload.id
        ),
      };
      state.users = state.users.map((user) =>
        user.id === state.currentUser.id
          ? state.currentUser
          : user.events.some((evt) => evt.event.id === payload.id)
          ? {
              ...user,
              events: user.events.filter((evt) => evt.event.id !== payload.id),
            }
          : user
      );
      localStorage.setItem('savedUsers', JSON.stringify(state.users));
    },
    attendEvent: (state, { payload }) => {
      state.currentUser = {
        ...state.currentUser,
        events:
          state.currentUser.id === payload.event.hostId
            ? state.currentUser.events.map((evt) =>
                evt.event.id === payload.event.id ? payload : evt
              )
            : [...state.currentUser.events, payload],
      };

      state.users = state.users.map((user) =>
        user.id === state.currentUser.id ? state.currentUser : user
      );
      localStorage.setItem('savedUsers', JSON.stringify(state.users));
    },
    declineEvent: (state, { payload }) => {
      state.currentUser = {
        ...state.currentUser,
        events:
          state.currentUser.id === payload.hostId
            ? state.currentUser.events.map((evt) =>
                evt.event.id === payload.id
                  ? { event: payload, attend: false }
                  : evt
              )
            : state.currentUser.events.filter(
                (evt) => evt.event.id !== payload.id
              ),
      };
      state.users = state.users.map((user) =>
        user.id === state.currentUser.id ? state.currentUser : user
      );
      localStorage.setItem('savedUsers', JSON.stringify(state.users));
    },
  },
});

export const {
  createUser,
  setUser,
  addUserEvent,
  removeUserEvent,
  attendEvent,
  declineEvent,
} = userSlice.actions;

export default userSlice.reducer;
