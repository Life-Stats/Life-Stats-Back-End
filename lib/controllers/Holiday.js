const { Router } = require('express');
const { getHolidays } = require('../services/holidays');
const { mungedDate } = require('../services/mungedDate');

module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const date = req.body;
      const { d, m, y } = mungedDate(date);
      const holiday = await getHolidays(d, m, y);
      return res.json(holiday);
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  });
