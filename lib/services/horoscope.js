// const aztroJs = require('aztro-js');

// const sign = 'virgo';
// const property = 'description';

//Get all horoscope i.e. today's, yesterday's and tomorrow's horoscope
// const horoscope = aztroJs.getAllHoroscope(sign, (res) => {
//   console.log(res);
//   return res;
// });

// const { response } = require('express');
const request = require('request');
const options = {
  url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
  method: 'POST',
};

function getRequest(error, response, body) {
  if (!error) {
    //&& response.statusCode == 200)
    console.log('BODY', body);
    // console.log(response, 'response');
    // console.log('ERROR', response.statusCode);
  }
}
console.log(getRequest(), 'REQUESST');

exports.getHoroscope = () => {
  return request(options, getRequest);
};

// exports.getHoroscope = async () => {
//   const fetchHoroscope = await fetch(horoscopeURL);
//   const data = await fetchHoroscope.text();
//   console.log('HELLLLO', data);
//   return data;
// };
