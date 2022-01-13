const { Router } = require('express');

const {
  signUpAUser,
  signInAUser,
  getAUser,
  // signOutAUser,
  getASession,
} = require('../models/UsersModel');

module.exports = Router()
  .post('/signup', async (req, res, next) => {
    try {
      const signUp = await signUpAUser({ email, password });
      res.send(signUp);
      // call UserModel
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  })

  .post('/login', async (req, res, next) => {
    try {
      const signIn = await signInAUser({ email, password });
      res.send(signIn);
      // call UserModel
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  })

  .get('/main', (req, res, next) => {
    try {

      const user = getAUser(req.body);
      res.send(user);
      // call UserModel
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  })

  .get('/main', (req, res, next) => {
    try {
      const user = getASession();
      res.send(user);
      // call UserModel
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  });

  // .get('/', async (req, res, next) => {
  //   try {
  //     const user = await signOutAUser();
  //     res.send(user);
  //     // call UserModel
  //   } catch (error) {
  //     next(error);
  //     console.log(error.message);
  //   }
  // })

