const binaryGap = function(n) {
    let lastPos = -1;
    let maxDist = 0;
    let currentPos = 0;

    while (n > 0) {
        if ((n & 1) === 1) {
            if (lastPos !== -1) {
                maxDist = Math.max(maxDist, currentPos - lastPos);
            }
            lastPos = currentPos;
        }
        n >>= 1;
        currentPos++;
    }

    return maxDist;
};
