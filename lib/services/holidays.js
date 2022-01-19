const fetch = require('node-fetch-commonjs');

exports.getHolidays = async (y, m, d) => {
  const day = d.toString();
  const mon = m.toString();
  const year = y.toString();
  const holidayURL = `https://calendarific.com/api/v2/holidays?api_key=5569725de1b2efd0a970fb8ea04cca422a8f6af2&country=US&year=${year}&month=${mon}&day=${day}`;

  const fetchHoliday = await fetch(holidayURL);
  const data = await fetchHoliday.json();
  // console.log('Holiday => ', data.response.holidays[0].name);
  return data.response.holidays.length === 0
    ? 'There is no holiday on this day!'
    : data.response.holidays[0].name;
};

// exports.getHolidays = async ({ year, month, day }) => {
//   const holidayURL =
//   `https://calendarific.com/api/v2/holidays?api_key=5569725de1b2efd0a970fb8ea04cca422a8f6af2&country=US&year=${year}&month=${month}&day=${day}`;

//   const fetchHoliday = await fetch(holidayURL);
//   const data = fetchHoliday.json();
//   console.log('HELLLLO', data);
//   return data;
// };

// DYLANS ORIG CODE BELOW
// const fetch = require('node-fetch-commonjs');
// const holidayURL =
//   'https://calendarific.com/api/v2/holidays?api_key=5569725de1b2efd0a970fb8ea04cca422a8f6af2&country=US&year=2019&month=11&day=03';

// exports.getHolidays = async () => {
//   const fetchHoliday = await fetch(holidayURL);
//   const data = fetchHoliday.json();
//   console.log('HELLLLO', data);
//   return data;
// };
