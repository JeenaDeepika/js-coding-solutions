const possibleStringCount = function(word) {
    let blocks = []; 
    let i = 0;
    while (i < word.length) {
        let j = i;
        while (j < word.length && word[j] === word[i]) {
            j++;
        }
        let len = j - i;
        if (len > 1) {
            blocks.push(len); 
        }
        i = j;
    }
    let total = 1;
    for (let len of blocks) {
        total += (len - 1);
    }
    return total;
};
