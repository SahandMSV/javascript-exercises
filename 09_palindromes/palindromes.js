const palindromes = function (str) {
    let arr = Array.from(str.toLowerCase());
    
    arr = arr.filter((ltr) => {
        return ltr != "!" && ltr != "," && ltr != "." && ltr != " ";
    });
    
    if (JSON.stringify(arr) == JSON.stringify(arr.reverse())) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
