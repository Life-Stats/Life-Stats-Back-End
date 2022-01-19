const { Router } = require('express');
// const { getBreaths } = require('../services/breath');
const getDifference = require('../utils/getDifference');
const DateCon = require('../Models/DateConstructor');
const { mungedDate } = require('../services/mungedDate');

module.exports = Router().post('/', async (req, res, next) => {
  console.log('HELLOOOO');
  try {
    const date = req.body;
    const { d, m, y } = mungedDate(date);

    const today = new Date();
    const todayYear = Number(today.getFullYear());
    const todayMonth = Number(today.getMonth() + 1); //-- starts at zero
    const todayDay = Number(today.getDate());

    const dt1 = new DateCon(d, m, y); //--input from user
    const dt2 = new DateCon(todayDay, todayMonth, todayYear); // --todays date
    const totalNumOfDays = getDifference(dt1, dt2);
    console.log('TOTALNUM', totalNumOfDays);
    const dailySeconds = 86400;
    const breathsPerSecond = 0.267;
    const heartBeatsPerSecond = 1.3;
    const blinksPerSecond = 0.225;
    const newTotalBreaths = Math.floor(
      totalNumOfDays * dailySeconds * breathsPerSecond
    );
    const totalHeartBeats = totalNumOfDays * dailySeconds * heartBeatsPerSecond;
    const totalBlinks = totalNumOfDays * dailySeconds * blinksPerSecond;
    const totalDreamDays = Math.ceil((totalNumOfDays * 2) / 24);
    const totalYearsAsleep = (totalNumOfDays / 3 / 365).toFixed(2);
    const totalExtinct = totalNumOfDays * 150;
    const total = {
      newTotalBreaths,
      totalHeartBeats,
      totalBlinks,
      totalDreamDays,
      totalYearsAsleep,
      totalExtinct,
    };
    console.log(total, 'TOTALLL');
    //need to put equations to get data as one object
    return res.send(total);
    // call UserModel
  } catch (error) {
    console.log(error);
    next(error);
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
