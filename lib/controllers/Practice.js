const { Router } = require('express');
const { getPractice } = require('../services/practice');

module.exports = Router().get('/practice', async (req, res, next) => {
  try {
    const practice = await getPractice();
    res.send(practice);
    // call UserModel
  } catch (error) {
    next(error);
    console.log(error.message);
  }
});
