const palindromes = function (str) {
    const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return sanitizedStr === sanitizedStr.split('').reverse().join('');;
};

// Do not edit below this line
module.exports = palindromes;
