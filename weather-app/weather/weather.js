const request = require('request')

let getWeather = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);



    request({
        url:"https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/38.9117,-94.67237",
        json: true}, (error, response, body) =>{
            if (!error && response.statusCode === 200){
                console.log(body.currently.temperature);
            } else if (response.statusCode === 400){
                console.log('Unable to fetch weather.')
            }
        });
};

module.exports.getWeather = getWeather;

