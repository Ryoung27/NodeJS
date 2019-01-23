// const yargs = require('yargs')
// const geocode = require('./geocode/geocode')

// const argv = yargs.options({
//     a: {
//         demand: true,
//         alias: "address",
//         describe: "Address to fetch weather.",
//         string: true
//     }
// }).help().alias('help', 'h').argv;

// // console.log(argv);

// // encodeURIComponent('text here to incode');
// // decodeURIComponent('test%20here')


// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage){
//         console.log(errorMessage);
//     } else{
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

//API Key 8691e730fc26412960eaba6814fdedbe
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// Forecast information address: https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/38.9117,-94.67237

const request = require('request')

request({
url:"https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/38.9117,-94.67237",
json: true}, (error, response, body) =>{
    console.log(body.currently.temperature);
});