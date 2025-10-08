const kthCharacter = function(k) {
    let totalShift = 0;
    let length = 1;
    let i = 0;
    while (length < k) {
        length *= 2;
        i++;
    }
    while (i > 0) {
        let prevLength = length / 2;
        
        if (k <= prevLength) {
            length = prevLength;
            i--;
        } else {
            totalShift++;
            k = k - prevLength;
            length = prevLength;
            i--;
        }
    }
    const charCode = 'a'.charCodeAt(0);
    const finalCharCode = charCode + totalShift;
    return String.fromCharCode(finalCharCode);
};
