const { Router } = require('express');
const getDifference = require('../utils/getDifference');
const DateCon = require('../Models/DateConstructor');
const { mungedDate } = require('../services/mungedDate');

module.exports = Router().post('/', async (req, res, next) => {
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
    return res.send(total);
  } catch (error) {
    next(error);
    console.log(error);
  }
});
