const { isNumber } = require("util");

const sumAll = function(x, y) {
    if (x < 0|| y < 0 || !Number.isInteger(x) || !Number.isInteger(y) ) {
        return "ERROR";
    }

    let min = x;
    let max = y;
    if (min > max) {
        min = y;
        max = x;
    }

    let res = 0;
    for (let i = min; i <= max; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
