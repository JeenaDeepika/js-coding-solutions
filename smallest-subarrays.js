const smallestSubarrays = function(nums) {
    const n = nums.length;
    const rightmost_bit_set = new Array(32).fill(-1); 
    const answer = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let max_j = i;
        for (let k = 0; k < 32; k++) {
            if (nums[i] & (1 << k)) {
                rightmost_bit_set[k] = i;
            }
            max_j = Math.max(max_j, rightmost_bit_set[k]);
        }
        answer[i] = max_j - i + 1;
    }
    return answer;
};
