const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=iHhgGZRvXgkFaYXTtz9G8SY6WfePes81&location=1301%20lombard%20street%20philadelphia',
    json: true
}, (error, response, body) =>{
    // console.log(body.results[0].locations[0].street);
    // console.log(`Address: ${body.results[0].locations[0].street}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng}`);
    // console.log(`Longitude: ${body.results[0].getometry.location.lng}`);
});