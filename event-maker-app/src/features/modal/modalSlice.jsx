import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCreateOpen: false,
  isShowOpen: false,
  isChatOpen: false,
  isLoginOpen: true,
  isConfirmOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCreateEvent: (state, action) => {
      state.isCreateOpen = true;
    },
    closeCreateEvent: (state, action) => {
      state.isCreateOpen = false;
    },
    openShowEvent: (state, action) => {
      state.isShowOpen = true;
    },
    closeShowEvent: (state, action) => {
      state.isShowOpen = false;
    },
    openChatEvent: (state, action) => {
      state.isChatOpen = true;
    },
    closeChatEvent: (state, action) => {
      state.isChatOpen = false;
    },
    openLogin: (state, action) => {
      state.isLoginOpen = true;
    },
    closeLogin: (state, action) => {
      state.isLoginOpen = false;
    },
    openConfirm: (state, action) => {
      state.isConfirmOpen = true;
    },
    closeConfirm: (state, action) => {
      state.isConfirmOpen = false;
    },
  },
});

export const {
  openChatEvent,
  closeChatEvent,
  openCreateEvent,
  closeCreateEvent,
  openShowEvent,
  closeShowEvent,
  openLogin,
  closeLogin,
  openConfirm,
  closeConfirm,
} = modalSlice.actions;

export default modalSlice.reducer;
