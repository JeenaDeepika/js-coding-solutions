const successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const n = spells.length;
    const result = new Array(n);
    const findFirstGreaterEqual = (target) => {
        let low = 0;
        let high = m - 1;
        let index = m;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (potions[mid] >= target) {
                index = mid; 
                high = mid - 1; 
            } else {
                low = mid + 1;
            }
        }
        return index;
    };
    for (let i = 0; i < n; i++) {
        const spellStrength = spells[i];
        const requiredPotion = Math.ceil(success / spellStrength);
        const firstWorkingIndex = findFirstGreaterEqual(requiredPotion);
        result[i] = m - firstWorkingIndex;
    }
    return result;
};
