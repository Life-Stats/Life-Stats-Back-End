
//   class DateCon {
//     constructor(d, m, y) {
//       this.d = d;
//       this.m = m;
//       this.y = y;
//     }
//   }
//   function exports.BreathFunction = async (date) => {mungedDate(date) {
//     let newDate = date;
//     let splitDate = newDate.split('-'); // ex: ['2022', '11', '03']
//     let d = Number(splitDate.reverse()[0]); // ex: ['01', '10', '1988']
//     let m = Number(splitDate.reverse()[1]); // ex: ['01', '10', '1988']
//     let y = Number(splitDate.reverse()[2]); // ex: ['01', '10', '1988']
//     setDay(d);
//     setMonth(m);
//     setYear(y);
//     return [d, m, y];
//   }

//   let today = new Date();
//   console.log('TODAY', today);
//   let todayYear = Number(today.getFullYear());
//   let todayMonth = Number(today.getMonth() + 1);
//   let todayDay = Number(today.getDate());

//   let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   function countLeapYears(d) {
//     let years = d.y;

//     if (d.m <= 2) {
//       years--;
//     }
//     return (
//       Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
//     );
//   }

//   function getDifference(dt1, dt2) {
//     let n1 = dt1.y * 365 + dt1.d;

//     for (let i = 0; i < dt1.m - 1; i++) {
//       n1 += monthDays[i];
//     }
//     n1 += countLeapYears(dt1);

//     let n2 = dt2.y * 365 + dt2.d;
//     for (let i = 0; i < dt2.m - 1; i++) {
//       n2 += monthDays[i];
//     }
//     n2 += countLeapYears(dt2);
//     return n2 - n1;
//   }

//   let dt1 = new DateCon(d, m, y);
//   let dt2 = new DateCon(todayDay, todayMonth, todayYear);
//   const totalNumOfDays = getDifference(dt1, dt2);
// };
