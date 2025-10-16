function maxSubarrays(n, conflictingPairs) {
    let validSubarrays = 0;
    const gains = new Array(n + 1).fill(0);
    const conflicts = Array.from({ length: n + 1 }, () => []);

    for (const pair of conflictingPairs) {
        const a = pair[0];
        const b = pair[1];
        conflicts[Math.max(a, b)].push(Math.min(a, b));
    }

    let maxLeft = 0;
    let secondMaxLeft = 0;

    for (let right = 1; right <= n; right++) {
        for (const left of conflicts[right]) {
            if (left > maxLeft) {
                secondMaxLeft = maxLeft;
                maxLeft = left;
            } else if (left > secondMaxLeft) {
                secondMaxLeft = left;
            }
        }

        validSubarrays += right - maxLeft;

        if (maxLeft > 0) {
            gains[maxLeft] += maxLeft - secondMaxLeft;
        }
    }

    let maxGain = 0;
    for (let i = 0; i <= n; i++) {
        if (gains[i] > maxGain) {
            maxGain = gains[i];
        }
    }

    return validSubarrays + maxGain;
}
