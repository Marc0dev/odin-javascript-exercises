const convertToCelsius = function(farenheit) {
  let celsius = (farenheit -32) * (5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius * 1.8) + 32;
  return Math.round(farenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
