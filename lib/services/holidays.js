const fetch = require('node-fetch-commonjs');

exports.getHolidays = async (d, m, y) => {
  const day = d.toString();
  const mon = m.toString();
  const year = y.toString();
  const holidayURL = `https://calendarific.com/api/v2/holidays?api_key=5569725de1b2efd0a970fb8ea04cca422a8f6af2&country=US&year=${year}&month=${mon}&day=${day}`;

  const fetchHoliday = await fetch(holidayURL);
  const data = await fetchHoliday.json();
  
  return data.response.holidays.length === 0 ? null : data.response.holidays[0].name;
};


