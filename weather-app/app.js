const yargs = require('yargs')
const geocode = require('./geocode/geocode')

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});