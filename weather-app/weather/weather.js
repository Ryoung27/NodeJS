const request = require('request')

let getWeather = (lat, lng, callback) => {
    let encodedAddress = encodeURIComponent(lat, lng);



    request({
        url:`https://api.darksky.net/forecast/8691e730fc26412960eaba6814fdedbe/${lat},${lng}`,
        json: true}, (error, response, body) =>{
            if (!error && response.statusCode === 200){
                callback(undefined,{
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                })
            } else if (response.statusCode === 400){
                callback('Unable to fetch weather.')
            }
        });
};

module.exports.getWeather = getWeather;

