const fetch = require('node-fetch-commonjs');
const holidayURL =
  'https://calendarific.com/api/v2/holidays?api_key=5569725de1b2efd0a970fb8ea04cca422a8f6af2&country=US&year=2019&month=11&day=03';

exports.getHolidays = async () => {
  const fetchHoliday = await fetch(holidayURL);
  const data = fetchHoliday.json();
  console.log('HELLLLO', data);
  return data;
};
