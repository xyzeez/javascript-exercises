const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  const initialValue = 0;
	return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
};

const multiply = function(...nums) {
  let numsArr = [...nums];
  const initialValue = 1;
	return numsArr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
  );

};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	if (num < 0) {
    return;
  } else if (num == 0) {
    return 1;
  } else {
    return  (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
