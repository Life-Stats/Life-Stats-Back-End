const { Router } = require('express');
const { getHoroscope } = require('../services/horoscope');
const fetch = require('node-fetch-commonjs');

// const aztroJs = require('aztro-js');

// const sign = 'virgo';
// const property = 'description';

//Get all horoscope i.e. today's, yesterday's and tomorrow's horoscope

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const data = await fetch(getHoroscope(req));
    console.log(data, 'DATATA');
    return res.json(data);
  } catch (error) {
    next(error);
    console.log(error.message);
  }
});
