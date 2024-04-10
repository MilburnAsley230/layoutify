const uniqueArray = require('./uniqueArray')
const isPrime = require('./isPrime')
const toUpperCase = require('./toUpperCase')
const arrayAverage = require('./arrayAverage')

module.exports = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }