import dayjs from 'dayjs';

const formatTimestampToDateString = timestampInSeconds => {
  const timestampInMilliseconds = timestampInSeconds * 1000;

  const date = new Date(timestampInMilliseconds);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

const formatTimestampToDateName = timestampInSeconds => {
  const MONTHS_TRANSLATE_KEYS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const timestampInMilliseconds = timestampInSeconds * 1000;
  const date = new Date(timestampInMilliseconds);

  const monthKey = MONTHS_TRANSLATE_KEYS[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return {monthKey, day, year};
};

const formatZoneDateToDateName = dateString => {
  const MONTHS_TRANSLATE_KEYS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date(dateString);
  const dateStrings = dateString?.split('T');
  const timeStrings = dateStrings[1].replace('Z', '').split(':');
  date.setSeconds(0);

  const monthKey = MONTHS_TRANSLATE_KEYS[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const minutes = timeStrings[1];
  const timeKey = timeStrings[0] >= 0 && timeStrings[0] <= 11 ? 'AM' : 'PM';
  const hours =
    timeStrings[0] >= 0 && timeStrings[0] <= 11
      ? timeStrings[0]
      : timeStrings[0] - 12;

  return {monthKey, day, year, hours, minutes, timeKey};
};

const formatDeadline = date => dayjs(date).format('MMMM D, YYYY');

const formatSelectedDeadline = deadline => {
  return `From: ${formatDeadline(deadline[0])}, To: ${formatDeadline(
    deadline[1],
  )}`;
};

const getYearsArray = (lowestYear = 1970) => {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];
  for (let year = currentYear; year >= lowestYear; year--) {
    yearsArray.push(year);
  }
  return yearsArray;
};

const isTimestampFromToday = timestampInSeconds => {
  const timestamp = new Date(timestampInSeconds * 1000);
  const currentDate = new Date();

  return (
    currentDate.getDate() === timestamp.getDate() &&
    currentDate.getMonth() === timestamp.getMonth() &&
    currentDate.getFullYear() === timestamp.getFullYear()
  );
};

const getTime = timestampInSeconds => {
  const timestamp = new Date(timestampInSeconds * 1000);

  return `${timestamp.getHours()}:${`0${timestamp.getMinutes()}`.substr(-2)}`;
};

const getDateTimeWithTimezone = (startTime, curDelta, timeZomeCountry) => {
  const startDate = new Date(startTime);
  // correct from current timezone delta + add the new delta
  startDate.setTime(
    startDate.getTime() -
      curDelta * 60 * 60 * 1000 +
      timeZomeCountry?.delta * 60 * 60 * 1000,
  );
  // set current delta for next correction
  return {startDate: startDate.toISOString(), newDelta: timeZomeCountry?.delta};
};

export {
  formatSelectedDeadline,
  formatDeadline,
  formatTimestampToDateString,
  formatTimestampToDateName,
  formatZoneDateToDateName,
  getYearsArray,
  isTimestampFromToday,
  getTime,
  getDateTimeWithTimezone,
};
