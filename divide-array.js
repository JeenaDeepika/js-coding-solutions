const divideArray = function(nums, k) {
    nums.sort((a, b) => a - b); 
    const n = nums.length;
    const result = [];
    for (let i = 0; i < n; i += 3) {
        const smallest = nums[i];
        const largest = nums[i + 2];
        if (largest - smallest > k) {
            return []; 
        }
        result.push([smallest, nums[i + 1], largest]);
    }
    return result;
};
