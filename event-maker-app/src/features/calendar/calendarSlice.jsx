import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  smallMonth: dayjs().month(),
  bigMonth: dayjs().month(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    nextSmallMonth: (state, action) => {
      state.smallMonth++;
    },
    prevSmallMonth: (state, action) => {
      state.smallMonth--;
    },
    nextBigMonth: (state, action) => {
      state.bigMonth++;
      state.smallMonth = state.bigMonth;
    },
    prevBigMonth: (state, action) => {
      state.bigMonth--;
      state.smallMonth = state.bigMonth;
    },
    thisMonth: (state, action) => {
      state.bigMonth = dayjs().month();
      state.smallMonth = dayjs().month();
    },
    chooseDate: (state, { payload }) => {
      const yearPassed = dayjs(payload).year() - dayjs().year();
      state.smallMonth = dayjs(payload).month() + yearPassed * 12;
    },
    setSelectedMonth: (state, { payload }) => {
      state.bigMonth = dayjs(payload).month();
      state.smallMonth = dayjs(payload).month();
    },
  },
});

export const {
  nextSmallMonth,
  prevSmallMonth,
  nextBigMonth,
  prevBigMonth,
  thisMonth,
  chooseDate,
  setSelectedMonth,
} = calendarSlice.actions;

export default calendarSlice.reducer;
