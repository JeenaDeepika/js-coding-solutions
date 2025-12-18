const maxProfit = function (prices, strategy, k) {
    const n = prices.length;
    const half = k >> 1;

    let total = 0;
    for (let i = 0; i < n; i++) {
        total += strategy[i] * prices[i];
    }

    let best = total; 

    let oldWindow = 0;
    let newWindow = 0;

    for (let i = 0; i < k; i++) {
        oldWindow += strategy[i] * prices[i];
        if (i >= half) newWindow += prices[i];
    }

    let curr = total - oldWindow + newWindow;
    if (curr > best) best = curr;

    for (let i = k; i < n; i++) {
        oldWindow -= strategy[i - k] * prices[i - k];
        oldWindow += strategy[i] * prices[i];

        newWindow -= prices[i - k + half];
        newWindow += prices[i];

        curr = total - oldWindow + newWindow;
        if (curr > best) best = curr;
    }

    return best;
};

