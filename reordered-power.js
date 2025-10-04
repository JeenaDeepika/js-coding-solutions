const reorderedPowerOf2 = function(n) {
    const sortDigits = (num) => num.toString().split('').sort().join('');
    const powerOf2Set = new Set();
    for (let i = 0; i < 31; i++) {
        let power = 1 << i;
        powerOf2Set.add(sortDigits(power));
    }
    return powerOf2Set.has(sortDigits(n));
};
