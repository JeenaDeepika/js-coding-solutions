const minPartitions = function(n) {
    let maxDigit = 0;
    for (let i = 0; i < n.length; i++) {
        let current = n[i] - '0';
        if (current > maxDigit) {
            maxDigit = current;
        }
        if (maxDigit === 9) return 9;
    }
    return maxDigit;
};
