const minNumberOperations = function(target) {
    if (!target || target.length === 0) {
        return 0;
    }
    let totalOperations = target[0]; 
    for (let i = 1; i < target.length; i++) {
        const current = target[i];
        const previous = target[i - 1];
        if (current > previous) {
            totalOperations += (current - previous);
        }
    }
    return totalOperations;
};
