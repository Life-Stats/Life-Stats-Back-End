const { mungedDate } = require('../lib/services/mungedDate');
const { getHolidays } = require('../lib/services/holidays');

describe('Holiday functions', () => {
  it('tests the mungeData function to munge a single string value into an object', async () => {
    
    const date = '1990-10-10';

    const munged = mungedDate({ date });

    const expectededDate = { d: 10, m: 10, y: 1990 };

    expect(munged).toEqual(expectededDate);
  });

  it('tests that the getHolidays function hits the holiday API and returns a holiday', async () => {
    
    const holiday = await getHolidays(10, 10, 1990);

    expect(holiday).toEqual('Last Day of Sukkot');
  });
});
