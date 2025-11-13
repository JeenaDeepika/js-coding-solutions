const maxOperations = function(s) {
    let total_ones = 0;
    let total_ops = 0;
    if (s[0] === '1') {
        total_ones = 1;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '1') {
            total_ones++;
        } 
        else if (s[i] === '0') {
            if (s[i - 1] === '1') {
                total_ops += total_ones;
            }
        }
    }
    return total_ops;
};
