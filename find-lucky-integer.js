/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = {}; 
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let result = -1;
    for (let num in freq) {
        const n = Number(num);
        if (freq[num] === n) {
            result = Math.max(result, n); 
        }
    }
    return result;
};
