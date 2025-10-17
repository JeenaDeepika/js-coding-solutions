const numDistinct = function(s, t) {
    let m = s.length, n = t.length;
    let ways = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        ways[i][0] = 1;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                ways[i][j] = ways[i - 1][j - 1] + ways[i - 1][j];
            } else {
                ways[i][j] = ways[i - 1][j];
            }
        }
    }
    return ways[m][n];
};
