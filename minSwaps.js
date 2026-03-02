const minSwaps = function(grid) {
    const n = grid.length;
    const trailingZeros = new Array(n);
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === 0) {
                count++;
            } else {
                break;
            }
        }
        trailingZeros[i] = count;
    }
    let totalSwaps = 0;
    for (let i = 0; i < n; i++) {
        const target = n - 1 - i;
        let foundIdx = -1;
        for (let j = i; j < n; j++) {
            if (trailingZeros[j] >= target) {
                foundIdx = j;
                break;
            }
        }
        if (foundIdx === -1) return -1;
        for (let j = foundIdx; j > i; j--) {
            [trailingZeros[j], trailingZeros[j - 1]] = [trailingZeros[j - 1], trailingZeros[j]];
            totalSwaps++;
        }
    }
    return totalSwaps;
};
