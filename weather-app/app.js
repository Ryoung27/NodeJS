const request = require('request');

const yargs = require('yargs')

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

let encodedAddress = encodeURIComponent(argv.a);


request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=iHhgGZRvXgkFaYXTtz9G8SY6WfePes81&location=${encodedAddress}`,
    json: true
}, (error, response, body) =>{

    console.log(`Address: ${body.results[0].locations[0].street}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);

});