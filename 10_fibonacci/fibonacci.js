const fibonacci = function(num) {
    if (num > 0) {
        let fabArr = [1];
        let start = 0;
        let stop = fabArr[0];
        for (let i = 1; i < num; i++) {
            fabArr[i] = start + stop;
            start = fabArr[i-1];
            stop = fabArr[i];
        }
        return fabArr[num-1];
    } else return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
