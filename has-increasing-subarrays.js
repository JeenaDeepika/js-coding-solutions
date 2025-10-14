const hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;
    if (n < 2 * k) {
        return false;
    }
    const isStrictlyIncreasing = (start) => {
        for (let i = start + 1; i < start + k; i++) {
            if (nums[i] <= nums[i - 1]) {
                return false;
            }
        }
        return true; 
    };
    const maxA = n - 2 * k;
    for (let a = 0; a <= maxA; a++) {
        const b = a + k; 
        const firstIsIncreasing = isStrictlyIncreasing(a);
        if (firstIsIncreasing) {
            const secondIsIncreasing = isStrictlyIncreasing(b);
            if (secondIsIncreasing) {
                return true;
            }
        }
    }
    return false;
};
