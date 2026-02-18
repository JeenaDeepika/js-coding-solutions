const readBinaryWatch = function(turnedOn) {
    const result = [];
    
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const hCount = h.toString(2).split('0').join('').length;
            const mCount = m.toString(2).split('0').join('').length;
            
            if (hCount + mCount === turnedOn) {
                result.push(`${h}:${m < 10 ? '0' + m : m}`);
            }
        }
    }
    return result;
};
