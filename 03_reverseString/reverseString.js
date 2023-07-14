const reverseString = function(str) {
    const letters = str.split('');
    let res = [];
    for (let i = letters.length - 1; i >= 0; i--) {
        res.push(letters[i]);
    }
    return res.join('');
    //return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
