const isInterleave = function(s1, s2, s3) {
    const L1 = s1.length;
    const L2 = s2.length;
    const L3 = s3.length;
    if (L1 + L2 !== L3) {
        return false;
    }
    const dp = Array(L1 + 1).fill(0).map(() => Array(L2 + 1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= L1; i++) {
        dp[i][0] = dp[i-1][0] && (s1[i-1] === s3[i-1]);
    }
    for (let j = 1; j <= L2; j++) {
        dp[0][j] = dp[0][j-1] && (s2[j-1] === s3[j-1]);
    }
    for (let i = 1; i <= L1; i++) {
        for (let j = 1; j <= L2; j++) {
            const k = i + j - 1;
            const fromS1 = dp[i-1][j] && (s1[i-1] === s3[k]);
            const fromS2 = dp[i][j-1] && (s2[j-1] === s3[k]);
            dp[i][j] = fromS1 || fromS2;
        }
    }
    return dp[L1][L2];
};
