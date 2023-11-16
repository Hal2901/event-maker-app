import dayjs from 'dayjs';

export default function getMonthDays(month) {
  month = Math.floor(month);
  const year = dayjs().year();
  const startDay = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - startDay;
  let calendar = [];
  for (let i = 0; i < 35; i++) {
    currentMonthCount++;
    calendar = [...calendar, dayjs(new Date(year, month, currentMonthCount))];
  }
  return calendar;
}
