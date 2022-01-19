// want to make a function that will take the input from the front end (date) after it is munged and set into state and
// get the difference between that date and today in days.

// { d, m, y } = useState(); --this should be set when the controller is hit and we call mungeDate

function countLeapYears(d) {
  // ---may want to put in its own file and import
  let years = d.y;

  if (d.m <= 2) {
    years--;
  }
  return (
    Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
  );
}

// ---- These are setup for getDifference - how do we do this when called? we could put this in the controller when the endpoint is hit.
// let today = new Date();
// let todayYear = Number(today.getFullYear());
// let todayMonth = Number(today.getMonth() + 1); -- starts at zero
// let todayDay = Number(today.getDate());

// let dt1 = new DateCon(d, m, y); --input from user
// let dt2 = new DateCon(todayDay, todayMonth, todayYear);  --todays date

// ----getDifference

module.exports = function getDifference(dt1, dt2) {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let n1 = dt1.y * 365 + dt1.d;

  for (let i = 0; i < dt1.m - 1; i++) {
    n1 += monthDays[i];
  }
  n1 += countLeapYears(dt1);

  let n2 = dt2.y * 365 + dt2.d;
  for (let i = 0; i < dt2.m - 1; i++) {
    n2 += monthDays[i];
  }
  n2 += countLeapYears(dt2);
  return n2 - n1;
};
