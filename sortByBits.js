var sortByBits = function(arr) {
    const countBits = (n) => {
        return n.toString(2).replace(/0/g, "").length;
    };
    return arr.sort((a, b) => {
        let bitA = countBits(a);
        let bitB = countBits(b);
        return bitA - bitB || a - b;
    });
};
