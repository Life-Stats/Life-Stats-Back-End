const { Router } = require('express');
const { getHolidays } = require('../services/holidays');
const { mungedDate } = require('../services/mungedDate');

module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const date = req.body;
      const { d, m, y } = mungedDate(date);
      const holiday = await getHolidays(d, m, y);
      console.log('getHolidays function returned response: ', holiday);
      return res.json(holiday);
    // call UserModel
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  });
