const removeFromArray = function(array, ...elements) {
    for (const e of elements) {
        let pos = array.indexOf(e);
        if (pos !== -1) {
            array.splice(pos, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
