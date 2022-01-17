const { Router } = require('express');
const { getHolidays } = require('../services/holidays');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const holidays = await getHolidays(req.body);
    return res.send(holidays);
    // call UserModel
  } catch (error) {
    next(error);
    console.log(error.message);
  }
});
