const possibleStringCount = function(word) {
    const n = word.length;
    let count = 1; 
    let i = 0;
    while (i < n) {
        const char = word[i];
        let j = i;
        while (j < n && word[j] === char) {
            j++;
        }
        const runLength = j - i;
        if (runLength > 1) {
            count += (runLength - 1);
        }
        i = j;
    }   
    return count;
};
