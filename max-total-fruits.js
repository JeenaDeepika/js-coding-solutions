const maxTotalFruits = function(fruits, startPos, k) {
    const n = fruits.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + fruits[i][1];
    }
    let maxTotalFruits = 0;
    let l = 0; 
    for (let r = 0; r < n; r++) {
        const R = fruits[r][0];
        while (l <= r) {
            const L = fruits[l][0]; 
            const stepsLeftFirst = (startPos >= L) ? 
                                     (startPos - L) * 2 + (R - startPos) 
                                     : Infinity; 
            const stepsRightFirst = (R >= startPos) ? 
                                      (R - startPos) * 2 + (startPos - L)
                                      : Infinity; 
            const directSteps = (startPos < L) ? (R - startPos) : 
                                (startPos > R) ? (startPos - L) : Infinity;
            const minSteps = Math.min(stepsLeftFirst, stepsRightFirst, directSteps);
            if (minSteps <= k) {
                break;
            } else {
                l++;
            }
        }
        if (l <= r) {
            const currentFruits = prefixSum[r + 1] - prefixSum[l];
            maxTotalFruits = Math.max(maxTotalFruits, currentFruits);
        }
    }

    return maxTotalFruits;
};
