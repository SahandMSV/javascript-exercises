const removeFromArray = function(arr, valueToRemve) {
    let accumulator = [...arr];
    for (let i = 1; i < arguments.length; i++) {
        accumulator = accumulator.filter(num => num !== arguments[i]);
    }
    return accumulator;
};

// Do not edit below this line
module.exports = removeFromArray;
