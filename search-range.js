const searchRange = function(nums, target) {
    function findIndex(isFirst) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } 
                else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    let first = findIndex(true);
    let last = findIndex(false);
    return [first, last];
};
