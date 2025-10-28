const countValidSelections = function(nums) {
    const n = nums.length;
    let validCount = 0;
    function isValid(startPos, startDir, originalNums) {
        const n = originalNums.length;
        const nums = [...originalNums];
        let curr = startPos;
        let dir = startDir;
        const totalSum = originalNums.reduce((sum, val) => sum + val, 0);
        const maxSteps = totalSum * n * 2 + 100; 
        let stepCount = 0;
        while (curr >= 0 && curr < n) {
            if (stepCount++ > maxSteps) {
                return false;
            }
            if (nums[curr] === 0) {
                curr += dir;
            } else {
                nums[curr] -= 1;
                dir = -dir;
                curr += dir;
            }
        }
        return nums.every(val => val === 0);
    }
    const startIndices = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            startIndices.push(i);
        }
    }
    for (const startPos of startIndices) {
        if (isValid(startPos, 1, nums)) {
            validCount++;
        }
        if (isValid(startPos, -1, nums)) {
            validCount++;
        }
    }
    return validCount;
};
