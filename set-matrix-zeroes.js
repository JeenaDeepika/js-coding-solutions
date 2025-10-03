constr setZeroes = function(matrix) {
    const m = matrix.length;
    if (m === 0) return;
    const n = matrix[0].length;
    const rowsToZero = new Array(m).fill(false);
    const colsToZero = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero[i] = true;
                colsToZero[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rowsToZero[i] || colsToZero[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};
