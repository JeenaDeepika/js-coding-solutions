const maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let right = 0;
    let currentSum = 0;
    let maxSum = 0;
    while (right < nums.length) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        currentSum += nums[right];
        maxSum = Math.max(maxSum, currentSum);
        right++;
    }
    return maxSum;
};
