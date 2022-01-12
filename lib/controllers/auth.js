import { Router } from 'express';

module.exports = Router().get('/signup', async (req, res, next) => {
  try {
    // call UserModel
  } catch (error) {
    console.log(error.message);
  }
});
