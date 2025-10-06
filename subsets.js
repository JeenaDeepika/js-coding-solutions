const subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const currentSubset = [];
    const backtrack = (start_index) => {
        result.push([...currentSubset]);
        for (let i = start_index; i < nums.length; i++) {
            if (i > start_index && nums[i] === nums[i - 1]) {
                continue; 
            }
            currentSubset.push(nums[i]);
            backtrack(i + 1);
            currentSubset.pop();
        }
    };
    backtrack(0);
    return result;
};
