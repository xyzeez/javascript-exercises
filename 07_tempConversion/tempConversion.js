const convertToCelsius = function(num) {
  let temp = ((num - 32) * (5/9));
  
  var multiplier = Math.pow(10, 1);
  temp = Math.round(temp * multiplier) / multiplier;
  
  return temp;
};

const convertToFahrenheit = function(num) {
  let temp = ((num) * (9/5)) + 32;

  var multiplier = Math.pow(10, 1);
  temp = Math.round(temp * multiplier) / multiplier;
  
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
