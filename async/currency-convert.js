// import Axios from "axios";

const axios = require('axios')

// USD, CAD, Amount

//Convert first value to second value.

// http://data.fixer.io/api/latest?access_key=8124fecb74330df0ca1c234ee097280a

const getExchangeRate = (from, to) => {
    return axios.get('http://data.fixer.io/api/latest?access_key=8124fecb74330df0ca1c234ee097280a').then((response) => {
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        return rate;
    })
};

getExchangeRate('USD', 'CAD').then((rate) => {
    console.log(rate);
});