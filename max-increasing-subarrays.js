const maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        } 
    }
    const canFind = (k) => {
        for (let a = 0; a <= n - 2 * k; a++) {
            const end_1 = a + k - 1; 
            const end_2 = a + 2 * k - 1; 
            const isFirstIncreasing = dp[end_1] >= k;
            const isSecondIncreasing = dp[end_2] >= k;
            if (isFirstIncreasing && isSecondIncreasing) {
                return true;
            }
        }
        return false;
    };
    let low = 1;
    let high = Math.floor(n / 2); 
    let maxK = 0;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (canFind(mid)) {
            maxK = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return maxK;
};
