const findSmallestInteger = function(nums, value) {
    let remainderCounts = new Array(value).fill(0);
    for (const n of nums) {
        let remainder = (n % value + value) % value;
        remainderCounts[remainder]++;
    }
    let mex = 0;
    while (true) {
        let requiredRemainder = mex % value;
        if (remainderCounts[requiredRemainder] > 0) {
            remainderCounts[requiredRemainder]--;
            mex++;
        } else {
            break;
        }
    }
    return mex;
};
