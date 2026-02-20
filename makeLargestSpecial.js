const makeLargestSpecial = function(s) {
    let count = 0;
    let i = 0;
    let res = [];

    for (let j = 0; j < s.length; j++) {
        if (s[j] === '1') count++;
        else count--;
        if (count === 0) {
            res.push("1" + makeLargestSpecial(s.substring(i + 1, j)) + "0");
            i = j + 1;
        }
    }
    return res.sort((a, b) => (b + a).localeCompare(a + b)).join("");
};
