const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32) * 5/9;
  if (temp % 1) {
    temp = roundToDecimal(temp, 1);
  }
  return temp;
};

const convertToFahrenheit = function(celsius) {
  let temp = celsius * 9/5 + 32;
  if (temp % 1) {
    temp = roundToDecimal(temp, 1);
  }
  return temp;
};

function roundToDecimal(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
