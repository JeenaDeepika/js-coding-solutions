const champagneTower = function(poured, query_row, query_glass) {
    let dp = new Array(query_row + 1).fill(0);
    dp[0] = poured;
    for (let r = 0; r < query_row; r++) {
        for (let c = r; c >= 0; c--) {
            let excess = Math.max(0, (dp[c] - 1) / 2.0);
            dp[c] = excess; 
            dp[c + 1] += excess;
        }
    }
    return Math.min(1.0, dp[query_glass]);
};
