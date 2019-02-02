// import Axios from "axios";

const axios = require('axios')


const getExchangeRate = async (from, to) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=8124fecb74330df0ca1c234ee097280a')
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];
    return rate;
};

const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return response.data.map((country) => country.name);
};

getExchangeRate('USD', 'CAD').then((rate) => {
    console.log(rate);
});

getCountries('EUR').then((countries) => {
    console.log(countries)
});