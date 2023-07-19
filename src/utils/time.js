export const timeParsed = (data) => {
  const months = [
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

  const timeZone = new Date().getTimezoneOffset() * 60;
  const bookingTimeUTC = new Date(data).getTime() / 1000;
  const newTime = bookingTimeUTC - timeZone;
  const parsedTime = JSON.stringify(new Date(newTime * 1000)).replace('"', '');

  let month = months[Number(parsedTime.substr(5, 2)) - 1];
  let date = parsedTime.substr(8, 2);
  let time = parsedTime.substr(11, 5);

  return { month, date, time };
};

export const getTimeDifference = (data) => {
  const timeZone = new Date().getTimezoneOffset() * 60;

  const bookingTimeUTC = new Date(data).getTime() / 1000;
  const newBookingTime = bookingTimeUTC - timeZone;

  const currentTimeUTC = new Date().getTime() / 1000;
  const newCurrentTime = currentTimeUTC - timeZone;

  const timeDifference = newBookingTime - newCurrentTime;

  return Math.floor(timeDifference / 60 / 60);
};
