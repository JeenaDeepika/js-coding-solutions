const maximumTotalDamage = function(power) {
    const damageMap = new Map();
    for (const p of power) {
        damageMap.set(p, (damageMap.get(p) || 0) + p);
    }
    const uniquePowers = Array.from(damageMap.keys()).sort((a, b) => a - b);
    const n = uniquePowers.length;
    if (n === 0) {
        return 0;
    }
    const dp = new Map(); 
    const P0 = uniquePowers[0];
    dp.set(P0, damageMap.get(P0)); 
    for (let i = 1; i < n; i++) {
        const Pi = uniquePowers[i];
        const damageOfPi = damageMap.get(Pi);
        const skipPiDamage = dp.get(uniquePowers[i - 1]);
        let maxPreviousUnrestrictedDamage = 0;
        for (let j = i - 1; j >= 0; j--) {
            const Pj = uniquePowers[j];
            if (Pj <= Pi - 3) {
                maxPreviousUnrestrictedDamage = dp.get(Pj);
                break; 
            }
        }
        const castPiDamage = damageOfPi + maxPreviousUnrestrictedDamage;
        const maxDamageAtPi = Math.max(skipPiDamage, castPiDamage);
        dp.set(Pi, maxDamageAtPi);
    }
    return dp.get(uniquePowers[n - 1]);
};
