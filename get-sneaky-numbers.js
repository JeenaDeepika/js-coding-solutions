const getSneakyNumbers = function(nums) {
    const seenNumbers = new Set();
    const sneakyNumbers = [];
    for (const num of nums) {
        if (seenNumbers.has(num)) {
            sneakyNumbers.push(num);
            if (sneakyNumbers.length === 2) {
                return sneakyNumbers;
            }
        } else {
            seenNumbers.add(num);
        }
    }
    return sneakyNumbers;
};
