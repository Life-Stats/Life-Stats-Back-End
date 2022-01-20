// const aztroJs = require('aztro-js');

// const sign = 'virgo';
// const property = 'description';

//Get all horoscope i.e. today's, yesterday's and tomorrow's horoscope
// const horoscope = aztroJs.getAllHoroscope(sign, (res) => {
//   console.log(res);
//   return res;
// });

// const fetch = require('node-fetch-commonjs');

// exports.getHoroscope = async ({ y, m, d }) => {
//   const findSign = (y, m, d) => {
//     const days = ['', 20, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21, 20];
//     const signs = ['', "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", 'Capricorn'];
//     let day = d.toString()
//     console.log('DAY', day)
//     let month = m.toString()
//     console.log('MONTH', month)
//     console.log('SIGNS', signs[month]);
//     return (day > days[month]) ? signs[month*1 + 1] : signs[month];
//   // const day = d.toString();
//   // const mon = m.toString();
//   // const year = y.toString();
//   const holidayURL = `https://aztro.sameerkumar.website/?sign=aries&day=today`;

//   // const fetchHoliday = await fetch(holidayURL);
//   // const data = await fetchHoliday.json();
//   // console.log('Holiday => ', data.response.holidays[0].name);
//   return data.response.holidays.length === 0
//     ? 'There is no holiday on this day!'
//     : data.response.holidays[0].name;
// };

// // const { response } = require('express');
// // const request = require('request');
// // const options = {
// //   url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
// //   method: 'POST',
// // };

// // function getRequest(error, response, body) {
// //   if (!error) {
// //     //&& response.statusCode == 200)
// //     console.log('BODY', body);
// //     // console.log(response, 'response');
// //     // console.log('ERROR', response.statusCode);
// //   }
// // }
// // console.log(getRequest(), 'REQUESST');

// // exports.getHoroscope = () => {
// //   return request(options, getRequest);
// // };

// // exports.getHoroscope = async () => {
// //   const fetchHoroscope = await fetch(horoscopeURL);
// //   const data = await fetchHoroscope.text();
// //   console.log('HELLLLO', data);
// //   return data;
// // };
