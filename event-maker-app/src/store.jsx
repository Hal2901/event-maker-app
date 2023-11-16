import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from './features/calendar/calendarSlice';
import modalSlice from './features/modal/modalSlice';
import eventSlice from './features/event/eventSlice';
import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    modal: modalSlice,
    event: eventSlice,
    user: userSlice,
  },
});
