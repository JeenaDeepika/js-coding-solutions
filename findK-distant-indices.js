const findKDistantIndices = function(nums, key, k) {
    const n = nums.length;
    const keyIndices = [];
    for (let j = 0; j < n; j++) {
        if (nums[j] === key) {
            keyIndices.push(j);
        }
    }
    if (keyIndices.length === 0) {
        return [];
    }
    const result = [];
    let currentStart = -1;
    let currentEnd = -1;
    for (const j of keyIndices) {
        const rStart = Math.max(0, j - k);
        const rEnd = Math.min(n - 1, j + k);

        if (currentStart === -1) {
            currentStart = rStart;
            currentEnd = rEnd;
        } else if (rStart <= currentEnd + 1) {
            currentEnd = Math.max(currentEnd, rEnd);
        } else {
            for (let i = currentStart; i <= currentEnd; i++) {
                result.push(i);
            }
            currentStart = rStart;
            currentEnd = rEnd;
        }
    }
    if (currentStart !== -1) {
        for (let i = currentStart; i <= currentEnd; i++) {
            result.push(i);
        }
    }
    return result;
};
