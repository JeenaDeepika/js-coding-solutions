const maxFrequencyElements = function(nums) {
    const freqMap = {};
    let maxFreq = 0;

    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
        }
    }
    let totalMaxFreq = 0;
    for (const freq of Object.values(freqMap)) {
        if (freq === maxFreq) {
            totalMaxFreq += freq;
        }
    }

    return totalMaxFreq;
};
