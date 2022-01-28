// get the difference between user input date and today in days.
function countLeapYears(d) {
  
  let years = d.y;

  if (d.m <= 2) {
    years--;
  }
  return (
    Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
  );
}

//Not using the full word date saves about 6 characters, but costs a lot of overheard when trying to figure out exactly what that parameter should represent
module.exports = function getDifference(date1, date2) {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let n1 = date1.y * 365 + date1.d;

  for (let i = 0; i < date1.m - 1; i++) {
    n1 += monthDays[i];
  }
  n1 += countLeapYears(date1);

  let n2 = date2.y * 365 + date2.d;
  for (let i = 0; i < date2.m - 1; i++) {
    n2 += monthDays[i];
  }
  n2 += countLeapYears(date2);
  return n2 - n1;
};
