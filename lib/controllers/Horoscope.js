const { Router } = require('express');
// const { getHoroscope } = require('../services/horoscope');

const aztroJs = require('aztro-js');

const sign = 'virgo';
// const property = 'description';

//Get all horoscope i.e. today's, yesterday's and tomorrow's horoscope

module.exports = Router().post('/', async (req, res, next) => {
  try {
    await aztroJs.getAllHoroscope(sign, (res) => {
      console.log(res.today);
      return res;
    });
  } catch (error) {
    next(error);
    console.log(error.message);
  }
});
