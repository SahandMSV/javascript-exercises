const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
};

const multiply = function(arr) {
	let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
  return sum;
};

const power = function(num, times) {
  return Math.pow(num, times);
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  } else {
    let result = num;
    for (let i = num - 1; i > 0; i--) {
      result = result * i;
    }
    return result;
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
