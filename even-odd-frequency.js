const maxDifference = function(s) {
    const freq = new Map();
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    let maxDiff = -Infinity;
    const entries = Array.from(freq.entries());
    for (let [char1, count1] of entries) {
        if (count1 % 2 === 0) continue;
        for (let [char2, count2] of entries) {
            if (count2 % 2 !== 0) continue; 
            maxDiff = Math.max(maxDiff, count1 - count2);
        }
    }
    return maxDiff === -Infinity ? 0 : maxDiff;
};
