const { Router } = require('express');
const { getBreaths } = require('../services/breath');

module.exports = Router().get('/main', async (req, res, next) => {
  try {
    const breaths = await getBreaths();
    res.send(breaths);
    // call UserModel
  } catch (error) {
    next(error);
    console.log(error.message);
  }
});
// .post('/signup', async (req, res, next) => {
//   try {
//     // const { email, password } = req.body;
//     // console.log('REQBODY......', req.body);
//     const signUp = await signUpAUser(req.body);
//     // create cookie here
//     res.send(signUp);
//     // call UserModel
//   } catch (error) {
//     next(error);
//     console.log(error.message);
//   }
// })

// .post('/login', async (req, res, next) => {
//   try {
//     const signIn = await signInAUser();
//     res.send(signIn);
//     // call UserModel
//   } catch (error) {
//     next(error);
//     console.log(error.message);
//   }
// })

// .get('/main', (req, res, next) => {
//   try {
//     const user = getASession();
//     res.send(user);
//     // call UserModel
//   } catch (error) {
//     next(error);
//     console.log(error.message);
//   }
// });

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
