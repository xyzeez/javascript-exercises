const palindromes = function (string) {

    let strArr = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');
    let backArr = [];
    let result;

    for (let i = strArr.length - 1; i >= 0; i--) {
        backArr.push(strArr[i]);
    }

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === backArr[i]) {
            result = true;
        } else {
            result = false;
            i = strArr.length;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
