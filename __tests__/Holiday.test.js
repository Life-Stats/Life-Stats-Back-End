const { mungedDate } = require('../lib/services/mungedDate');
const { getHolidays } = require('../lib/services/holidays');

// Holiday route ---> '/api/v1/holiday'

describe('Holiday functions', () => {
  it('tests the mungeData function to munge a single string value into an object', async () => {
    // The date received from users input is one string.
    const date = '1990-10-10';

    // mungedDate function takes in the date
    const munged = mungedDate({ date });

    // and returns the value like so.
    const expectededDate = { d: 10, m: 10, y: 1990 };

    expect(munged).toEqual(expectededDate);
  });

  it('tests that the getHolidays function hits the holiday API and returns a holiday', async () => {
    // getHolidays takes in the holid
    const holiday = await getHolidays(10, 10, 1990);

    expect(holiday).toEqual('Last Day of Sukkot');
  });
});
