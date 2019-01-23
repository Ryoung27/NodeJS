const yargs = require('yargs')
const geocode = require('./geocode/geocode')

const weather = require('./weather/weather')

const argv = yargs.options({
    a: {
        demand: true,
        alias: "address",
        describe: "Address to fetch weather.",
        string: true
    }
}).help().alias('help', 'h').argv;

// console.log(argv);

// encodeURIComponent('text here to incode');
// decodeURIComponent('test%20here')


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) =>{
            if (errorMessage){
                console.log(errorMessage)
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});



//lat
//lng
//callback, error and results




// const request = require('request')

// request({
// url:"https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/38.9117,-94.67237",
// json: true}, (error, response, body) =>{
//     if (!error && response.statusCode === 200){
//         console.log(body.currently.temperature);
//     } else if (response.statusCode === 400){
//         console.log('Unable to fetch weather.')
//     }
// });