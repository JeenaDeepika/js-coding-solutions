const countBits = function(n) {
    const ans = [];
    for (let i = 0; i <= n; i++) {
        ans.push(i.toString(2).split('').filter(bit => bit === '1').length);
    }
    return ans;
};
