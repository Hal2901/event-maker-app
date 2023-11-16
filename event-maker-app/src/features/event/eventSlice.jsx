import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

// localStorage.clear();
// localStorage.removeItem('savedEvents');
const storageEvents = localStorage.getItem('savedEvents');
const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];

const initialState = {
  savedEvents: parsedEvents,
  daySelected: dayjs(),
  selectedEvent: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    createEvent: (state, { payload }) => {
      state.savedEvents = [...state.savedEvents, payload];
      localStorage.setItem('savedEvents', JSON.stringify(state.savedEvents));
      console.log(state.savedEvents);
    },
    updateEvent: (state, { payload }) => {
      state.savedEvents = state.savedEvents.map((event) =>
        event.id === payload.id ? payload : event
      );
      localStorage.setItem('savedEvents', JSON.stringify(state.savedEvents));
    },
    deleteEvent: (state, { payload }) => {
      state.savedEvents = state.savedEvents.filter(
        (event) => event.id !== payload.id
      );
      localStorage.setItem('savedEvents', JSON.stringify(state.savedEvents));
      state.selectedEvent = null;
    },
    setSelectedDay: (state, { payload }) => {
      state.daySelected = payload;
    },
    setSelectedEvent: (state, { payload }) => {
      state.selectedEvent = payload;
    },
  },
});

export const {
  createEvent,
  updateEvent,
  deleteEvent,
  setSelectedDay,
  setSelectedEvent,
} = eventSlice.actions;

export default eventSlice.reducer;
