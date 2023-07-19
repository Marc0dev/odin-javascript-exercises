const fibonacci = function(num) {
    if (num <= 0) return 'OOPS';
    num = Number(num);

    let current = 1;
    let pre = 0;
    for (let i = 1; i < num; i++) {
        let temp = current;
        current += pre;
        pre = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
